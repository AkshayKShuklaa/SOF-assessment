import express from "express";
import { ROLES } from "../constants/roles.js";
import { getUsers } from "../controllers/userController.js";
import { authorize, protect } from "../middleware/auth.js";

export const userRouter = express.Router();

userRouter.get("/", protect, authorize(ROLES.ADMIN), getUsers);
