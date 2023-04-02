import express from "express";
import {getAvalicaoFilme} from "../controller/avaliacaofilme.js"

const router = express.Router()


router.get("/avaliacaofilme", getAvalicaoFilme)



export default router