import { Request, Response } from "express";
import userService from '../services/users.service';

const getAll = async (_req: Request, res: Response) => {
  const { message } = await userService.getAll();
  res.status(200).json(message);
}

export default {
  getAll,
}