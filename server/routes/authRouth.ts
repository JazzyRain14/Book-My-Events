import express, { Router } from "express";
import { LoginController, SignupController } from "../controllers/authController";
import { authorize, protect } from "../middleware/authmiddleware";

export const authRouter = express.Router();

authRouter.post('/signup', SignupController)
authRouter.post('/login', LoginController)