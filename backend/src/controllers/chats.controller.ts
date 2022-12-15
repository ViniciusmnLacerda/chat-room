import { Request, Response } from "express";
import { chatsService } from "../services";

const getAll = async (req: Request, res: Response) => {
  const { user: { id } } = req.body;
  const { message } = await chatsService.getAll(+id);
  res.status(200).json(message);
}

export default {
  getAll,
}