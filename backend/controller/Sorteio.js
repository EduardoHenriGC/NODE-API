import { db } from "../db.js";

export const getParticipantes = (_, res) => {
  const q = "SELECT * FROM sorteio";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getParticipantesById = (req, res) => {
  
  
  
  const q = "SELECT * FROM sorteio WHERE id = ?"
   
  
  db.query(q,req.params.id,(err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
    
  });
  
};


export const addParticipante = (req, res) => {
  const q =
    "INSERT INTO sorteio(`nome`,`email`,`rua`, `bairro`,`numero`,`telefone`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.rua,
    req.body.bairro,
    req.body.numero,
    req.body.telefone,
    
    
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Participante criado com sucesso.");
  });
};

export const updateParticipante = (req, res) => {
  const q =
    "UPDATE sorteio SET `nome` = ?, `email` = ?, `rua` = ?,`bairro` = ?, `numero` = ?, `telefone` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.rua,
    req.body.bairro,
    req.body.numero,
    req.body.telefone,
    
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Participante atualizado com sucesso.");
  });
};

export const deletePartipante = (req, res) => {
  const q = "DELETE FROM sorteio WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Participante deletado com sucesso.");
  });
};
