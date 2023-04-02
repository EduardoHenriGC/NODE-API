import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import api from "./api";


const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  
`;

const Label = styled.label`



`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Sorteio = ({onEditSorteio, setOnEditSorteio,getParticipantes }) => {

    const ref = useRef();
    

   
    
    
  

  useEffect(() => {
    
    if (onEditSorteio) {
      const participant = ref.current;

      participant.nome.value = onEditSorteio.nome;
      participant.rua.value = onEditSorteio.rua;
      participant.bairro.value = onEditSorteio.bairro;
      participant.numero.value = onEditSorteio.numero;
      participant.email.value = onEditSorteio.email;
      participant.telefone.value = onEditSorteio.telefone;
    }
  }, [onEditSorteio]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const participant = ref.current;

    if (
        !participant.nome.value ||
      !participant.rua.value||
      !participant.bairro.value ||
      !participant.telefone.value ||
     ! participant.email.value ||
     !participant.numero.value 
      
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEditSorteio) {
      await api
        .put("/sorteio" + onEditSorteio.id, {

          nome: participant.nome.value,
          rua: participant.rua.value,
          bairro:participant.bairro.value,
          numero: participant.numero.value,
          telefone: participant.telefone.value,
          email: participant.email.value,
          
          


          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await api
        .post("/sorteio", {
            nome: participant.nome.value,
            rua: participant.rua.value,
            bairro:participant.bairro.value,
            telefone: participant.telefone.value,
            email: participant.email.value,
            numero: participant.numero.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    participant.nome.value = "";
    participant.rua.value = "";
    participant.bairro.value = "";
    participant.numero.value = "";
    participant.email.value = "";
    participant.telefone.value = "";

    setOnEditSorteio(null);
    getParticipantes();
    
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea >
        <Label>Nome</Label>
        <Input  name="nome" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input  name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label >rua</Label>
        <Input autocomplete="off" name="rua" />
      </InputArea>
      <InputArea>
        <Label> bairro</Label>
        <Input autocomplete="off" name="bairro"/>
      </InputArea>
      <InputArea>
        <Label> numero</Label>
        <Input autocomplete="off" name="numero" type="number" />
      </InputArea>
      
    
      <InputArea autocomplete="off">
        <Label>Telefone</Label>
        <Input name="telefone" type="number"/>
      </InputArea>
   
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Sorteio;
