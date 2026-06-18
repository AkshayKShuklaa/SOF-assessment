import { User } from "../models/User.js";

export async function getUsers(req, res, next) {
  try {
    const users = await User.find().select("name email role").sort({ name: 1 });
    res.json(users);
  } catch (error) {
    next(error);
  }
}
