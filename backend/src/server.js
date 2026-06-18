import { app } from "./app.js";
import { connectDB } from "./config/db.js";
import { env } from "./config/env.js";

async function startServer() {
  try {
    await connectDB();
    app.listen(env.port, () => {
      console.log(`API listening on port ${env.port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

startServer();
