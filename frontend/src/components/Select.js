import React,{useEffect,useState} from 'react'
import api from "./api";
import styled from "styled-components";



export const Container = styled.div`
 
 #divBusca{

  border-radius:15px;
 display: flex;
 justify-content: center;
 align-items: center;

gap: 5px;

}
#icon-busca{
  float: right;
  


font-size: 20px;
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
export const Option = styled.option`
text-align: center;
border: none;



 `
export const Selected = styled.select`
width: 200px;

 `



const Select = () => {

    const [avaliacaofilme, setAvaliacaofilme] = useState([]);



    const getAvalicaoFilme = async () => {
   try{
     const res = await api.get("/avaliacaofilme")
   
     const data = res.data
     setAvaliacaofilme(data)
   }
   catch{}
}
useEffect(() => {
    getAvalicaoFilme();
 
      
       
   }, 
   []);
  return (
   <Container>



    <Selected> {avaliacaofilme.map((item)=>
    
    <Option key={item.id}> {item.avaliacaofilme}

     

    </Option>
    )}
</Selected>
   
   </Container>
  )
}

export default Select