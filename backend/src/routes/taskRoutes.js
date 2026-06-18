import express from "express";
import { ROLES } from "../constants/roles.js";
import { createTask, getTasks, updateTaskStatus } from "../controllers/taskController.js";
import { authorize, protect } from "../middleware/auth.js";

export const taskRouter = express.Router();

taskRouter.use(protect);
taskRouter.route("/").get(getTasks).post(authorize(ROLES.ADMIN), createTask);
taskRouter.put("/:id", updateTaskStatus);
