import { Project } from "../models/Project.js";

export async function createProject(req, res, next) {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Project name is required" });
    }

    const project = await Project.create({
      name,
      createdBy: req.user._id
    });

    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
}

export async function getProjects(req, res, next) {
  try {
    const projects = await Project.find()
      .populate("createdBy", "name email role")
      .sort({ createdAt: -1 });

    res.json(projects);
  } catch (error) {
    next(error);
  }
}
