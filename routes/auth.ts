import express from "express";
import { logIn, signUp } from "../controllers/auth";

const authRoutes = express.Router();

authRoutes.post("/signup", signUp);

export default authRoutes;
