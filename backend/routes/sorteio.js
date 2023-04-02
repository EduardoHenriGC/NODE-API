import express from "express";
import { addParticipante, deletePartipante, getParticipantes, updateParticipante,getParticipantesById } from "../controller/Sorteio.js";

const router = express.Router()

router.get("/sorteio", getParticipantes)


router.get("/sorteio/:id", getParticipantesById)

router.post("/sorteio", addParticipante)

router.put("/sorteio:id", updateParticipante)

router.delete("/sorteio:id", deletePartipante)

export default router