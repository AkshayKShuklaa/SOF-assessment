import { ROLES } from "../constants/roles.js";
import { User } from "../models/User.js";
import { signToken } from "../utils/jwt.js";

function sendAuthResponse(res, user, statusCode = 200) {
  const token = signToken(user);
  res.status(statusCode).json({ token, user });
}

export async function register(req, res, next) {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role === ROLES.ADMIN ? ROLES.ADMIN : ROLES.MEMBER
    });

    sendAuthResponse(res, user, 201);
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    sendAuthResponse(res, user);
  } catch (error) {
    next(error);
  }
}
