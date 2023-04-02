import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import ListFilmes from "./components/ListFilmes.js";
import api from "./components/api.js";

import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sorteio from "./components/Sorteio";
import GridSorteio from "./components/gridSorteio";
import Select from "./components/Select";
import SearchPage from "./components/Search";




const Container = styled.div`
  width: 100%;
  
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [participante, setParticipante] = useState([]);
  const [onEditSorteio, setOnEditSorteio] = useState(null);
  const [onEdit, setOnEdit] = useState(null);
  

  const getUsers = async () => {
    try {
      const res = await api.get("/user");
      setUsers(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const getParticipantes = async () => {
    try {
      const res = await api.get("/sorteio");
      setParticipante(res.data);
      
    } catch (error) {
      toast.error(error);
      
    }
  };
 
useEffect(() => {
    getUsers();
    getParticipantes();
    
   
  }, []);

  return (
    <>
      <Container>
        
        <SearchPage/>
       <Sorteio onEditSorteio={onEditSorteio} setOnEditSorteio={setOnEditSorteio} getParticipantes={getParticipantes}/>
       <GridSorteio setOnEditSorteio={setOnEditSorteio} participante={participante} setParticipante={setParticipante}/>
       <Select/>
      <ListFilmes/>
        <Title>USUÁRIOS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
