import api from "./api";
import { useState } from "react";
import styled from "styled-components";
import {BsSearch} from "react-icons/bs"


const ContainerSearch = styled.div`

display: flex;
justify-content: center;
align-items: center;



`
const Form = styled.form`


border-radius:15px;
display: flex;
gap: 10px;


#icon-busca{





font-size: 28px;
cursor: pointer;
:hover{
color:goldenrod;
}

}
#txtBusca{
float:left;
background-color:transparent;
padding-left:5px;
font-style:italic;
font-size:18px;
border:none;
height:32px;
width:260px;
}

`
const Button = styled.button`
border: none;


`
const Table = styled.table`
  width: 1200px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody`
`;

export const Tr = styled.tr`

 `;

export const Th = styled.th`
  text-align: center;
  border-bottom: inset;
  padding-bottom: 5px;
 

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: center;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;
const SearchPage = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await api.get('/search', { params: { q: searchTerm } });
      setSearchResults(response.data);
    };
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div>
    <ContainerSearch>

    <Form  onSubmit={handleSubmit}>
  <input type="text" value={searchTerm} onChange={handleChange}  id="txtBusca" placeholder="Buscar..."/>
  <Button type="submit"><BsSearch id="icon-busca"/></Button>
</Form>

    </ContainerSearch>
        {/* <form >
          <input type="text" value={searchTerm} onChange={handleChange} />
          <button type="submit">Search aqui</button>
        </form> */}
        <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th>rua</Th>
          <Th>bairro</Th>
          <Th onlyWeb >numero</Th>
          
          <Th>telefone</Th>
          
        </Tr>
      </Thead>
      <Tbody>
        {searchResults.map((item, i) => (
          <Tr key={i}>
            <Td width="20%">{item.nome}</Td>
            <Td width="20%">{item.email}</Td>
            <Td width="15%">{item.rua}</Td>
            <Td width="17%">{item.bairro}</Td>
            <Td width="10%">{item.numero}</Td>
            <Td  width="10%" onlyWeb>
              {item.telefone}
            </Td>
           
          </Tr>
        ))}
      </Tbody>
    </Table>
      </div>
    );
  }
  
  export default SearchPage;