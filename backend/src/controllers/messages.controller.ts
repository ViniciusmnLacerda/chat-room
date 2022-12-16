import { Request, Response } from "express";
import { messagesService } from "../services";
import mapError from "../utils/mapError";

const getAll = async (req: Request, res: Response) => {
  const { chatId } = req.params;
  const { user: { id: userId } } = req.body;
  const { type, message } = await messagesService.getAll(+chatId, +userId);
  if (type) return res.status(mapError(type)).json({ message });
  res.status(200).json(message)
}

export default {
  getAll,
}