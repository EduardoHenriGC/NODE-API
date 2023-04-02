import express from "express";
import {getFilmes} from "../controller/filmes.js"

const router = express.Router()


router.get("/filmes", getFilmes)



export default router