import { db } from "../db.js";


export const getSearch = (req, res) => {
    const searchTerm = req.query.q;
    const query = `SELECT * FROM sorteio WHERE nome LIKE '%${searchTerm}%' or email LIKE '%${searchTerm}%'  or rua LIKE '%${searchTerm}%' or bairro LIKE '%${searchTerm}%' or numero LIKE '%${searchTerm}%' or telefone LIKE '%${searchTerm}%'`;
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing SQL query', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.send(results);
    });
   
}
