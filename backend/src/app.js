import cors from "cors";
import express from "express";
import morgan from "morgan";
import { env } from "./config/env.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import { authRouter } from "./routes/authRoutes.js";
import { projectRouter } from "./routes/projectRoutes.js";
import { taskRouter } from "./routes/taskRoutes.js";
import { userRouter } from "./routes/userRoutes.js";

export const app = express();

app.use(
  cors({
    origin: env.clientUrl,
    credentials: true
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);
app.use("/api/tasks", taskRouter);
app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorHandler);
