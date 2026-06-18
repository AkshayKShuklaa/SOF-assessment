import mongoose from "mongoose";
import { TASK_STATUS } from "../constants/roles.js";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
      maxlength: 160
    },
    description: {
      type: String,
      required: [true, "Task description is required"],
      trim: true,
      maxlength: 2000
    },
    status: {
      type: String,
      enum: Object.values(TASK_STATUS),
      default: TASK_STATUS.TODO
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true
    },
    dueDate: {
      type: Date,
      required: [true, "Due date is required"]
    }
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", taskSchema);
