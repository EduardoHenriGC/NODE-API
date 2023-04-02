import React from "react";

import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import api from "./api";




const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 80%;
  margin: 0 auto;
  word-break: break-all;
`;

export const Thead = styled.thead`
`;

export const Tbody = styled.tbody`
`;

export const Tr = styled.tr`

 `

export const Th = styled.th`
  text-align: center;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;



export const Td = styled.td`
text-align: center;
  padding-top: 15px;
  
  .edit,.delete{

cursor: pointer;

  }
  .edit:hover{

color: #1E6A28;

}
.delete:hover{

color: red;

}
  
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const GridSorteio = ({setOnEditSorteio, participante, setParticipante }) => {
  
    const handleEdit = (item) => {
        setOnEditSorteio(item);
  };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm('Tem certeza que deseja excluir esse item?');

    if (confirmDelete) {

    await api
      .delete("/sorteio" + id)
      .then(({ data }) => {
        const newArray = participante.filter((participant) => participant.id !== id);

        setParticipante(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEditSorteio(null);}
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th>rua</Th>
          <Th>bairro</Th>
          <Th>numero</Th>
          <Th onlyWeb >telefone</Th>
          <Th></Th>
          <Th></Th>
          
          
        </Tr>
      </Thead>
      <Tbody>
        {participante.map((item, i) => (
          <Tr key={i}>
            <Td width="20%">{item.nome}</Td>
            <Td width="20%">{item.email}</Td>
            <Td width="15%">{item.rua}</Td>
            <Td width="20%">{item.bairro}</Td>
            <Td width="5%">{item.numero}</Td>
            <Td  width="12%" onlyWeb>
              {item.telefone}
            </Td>
            <Td  alignCenter width="4%">
              <FaEdit className="edit"  onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="4%">
              <FaTrash className="delete" onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default GridSorteio;
