import express from "express"
import XingLING from "./routes/users.js"
import Teste from "./routes/filme.js"
import sort from "./routes/sorteio.js"
import Long from "./routes/avaliacaofilme.js"
import Levi from "./routes/search.js"

import cors from "cors"


const app = express()

app.use(express.json())
app.use(cors())

app.use("/", XingLING,Teste,sort,Long, Levi)

app.listen(8800)