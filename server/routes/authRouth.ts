import express from "express";
import { SignupController } from "../controllers/authController";

export const authRouter = express.Router();

authRouter.post('/signup',SignupController)