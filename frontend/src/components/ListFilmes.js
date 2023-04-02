
import React, { useEffect, useState } from "react";

import api from "./api";













const ListFilmes = () => {

  const [filmes, setFilmes] = useState([]);



 const getFilmes = async () => {
try{
  const res = await api.get("/filmes")

  const data = res.data
  setFilmes(data)
}
catch{}


 }

  useEffect(() => {
   getFilmes();

     
      
  }, 
  []);
 
  return (
   <ul>
    {filmes.map((item)=>
    
    <li className="container-list" key={item.idfilme}>

     <p>{item.nomefilme}</p>
     <div className="img-container"><img src={item.imagemurl}/></div>
     <p>{item.descricao}</p>

    </li>
    )}


   </ul>

)}
export default ListFilmes;
