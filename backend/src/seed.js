import { connectDB } from "./config/db.js";
import "./config/env.js";
import { ROLES, TASK_STATUS } from "./constants/roles.js";
import { Project } from "./models/Project.js";
import { Task } from "./models/Task.js";
import { User } from "./models/User.js";

async function seed() {
  await connectDB();

  await Promise.all([User.deleteMany({}), Project.deleteMany({}), Task.deleteMany({})]);

  const [admin, member] = await User.create([
    {
      name: "Admin User",
      email: "admin@example.com",
      password: "password123",
      role: ROLES.ADMIN
    },
    {
      name: "Member User",
      email: "member@example.com",
      password: "password123",
      role: ROLES.MEMBER
    }
  ]);

  const project = await Project.create({
    name: "MVP Launch",
    createdBy: admin._id
  });

  await Task.create([
    {
      title: "Prepare launch checklist",
      description: "Collect final items needed before launch.",
      assignedTo: member._id,
      projectId: project._id,
      dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      status: TASK_STATUS.TODO
    },
    {
      title: "Review project board",
      description: "Make sure every launch task has an owner.",
      assignedTo: admin._id,
      projectId: project._id,
      dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      status: TASK_STATUS.IN_PROGRESS
    }
  ]);

  console.log("Seed complete");
  console.log("Admin: admin@example.com / password123");
  console.log("Member: member@example.com / password123");
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
