import express from "express";
import { ROLES } from "../constants/roles.js";
import { createProject, getProjects } from "../controllers/projectController.js";
import { authorize, protect } from "../middleware/auth.js";

export const projectRouter = express.Router();

projectRouter.use(protect);
projectRouter.route("/").get(getProjects).post(authorize(ROLES.ADMIN), createProject);
