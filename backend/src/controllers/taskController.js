import { ROLES, TASK_STATUS } from "../constants/roles.js";
import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";
import { User } from "../models/User.js";

const taskPopulation = [
  { path: "assignedTo", select: "name email role" },
  { path: "projectId", select: "name" }
];

export async function createTask(req, res, next) {
  try {
    const { title, description, assignedTo, projectId, dueDate } = req.body;

    if (!title || !description || !assignedTo || !projectId || !dueDate) {
      return res.status(400).json({
        message: "Title, description, assignedTo, projectId, and dueDate are required"
      });
    }

    const [assignee, project] = await Promise.all([
      User.findById(assignedTo),
      Project.findById(projectId)
    ]);

    if (!assignee) {
      return res.status(404).json({ message: "Assigned user not found" });
    }

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const task = await Task.create({
      title,
      description,
      assignedTo,
      projectId,
      dueDate
    });

    const populatedTask = await task.populate(taskPopulation);
    res.status(201).json(populatedTask);
  } catch (error) {
    next(error);
  }
}

export async function getTasks(req, res, next) {
  try {
    const query = req.user.role === ROLES.ADMIN ? {} : { assignedTo: req.user._id };

    const tasks = await Task.find(query)
      .populate(taskPopulation)
      .sort({ dueDate: 1, createdAt: -1 });

    res.json(tasks);
  } catch (error) {
    next(error);
  }
}

export async function updateTaskStatus(req, res, next) {
  try {
    const { status } = req.body;

    if (!Object.values(TASK_STATUS).includes(status)) {
      return res.status(400).json({ message: "Status must be TODO, IN_PROGRESS, or DONE" });
    }

    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    const isOwner = task.assignedTo.toString() === req.user._id.toString();
    if (req.user.role !== ROLES.ADMIN && !isOwner) {
      return res.status(403).json({ message: "You can only update your own tasks" });
    }

    task.status = status;
    await task.save();

    const populatedTask = await task.populate(taskPopulation);
    res.json(populatedTask);
  } catch (error) {
    next(error);
  }
}
