import express from "express";
import { SignUp } from "../controllers/SignUp.js";
const router=express.Router();


router.post("/signup",SignUp);
export default router