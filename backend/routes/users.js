import express from "express";
import { addUser, deleteUser, getUsers, updateUser,getUsersbyId } from "../controller/user.js";

const router = express.Router()


router.get("/user", getUsers)

router.get("/user/:id", getUsersbyId)

router.post("/user", addUser)

router.put("/user:id", updateUser)

router.delete("/user:id", deleteUser)

export default router