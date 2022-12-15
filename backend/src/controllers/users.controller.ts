import { Request, Response } from "express";
import userService from '../services/users.service';
import mapError from "../utils/mapError";

const getAll = async (_req: Request, res: Response) => {
  const { message } = await userService.getAll();
  res.status(200).json(message);
}

const login = async (req: Request, res: Response) => {
  const user = req.body;
  const { type, message } = await userService.login(user)
  res.status(200).json({ token: message })
}

const signup = async (req: Request, res: Response) => {
  const user = req.body;
  const { type, message } = await userService.signup(user);
  if (type) return res.status(mapError(type)).json({ message })
  res.status(201).json({ token: message })
}

export default {
  getAll,
  login,
  signup,
}