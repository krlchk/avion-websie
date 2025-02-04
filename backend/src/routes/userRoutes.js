import express from "express";
import userController from "../controller/userController.js";
const { createUser, loginUser } = userController;

const router = express.Router();

router.post("/user", createUser);
router.post("/login", loginUser);

export default router;
