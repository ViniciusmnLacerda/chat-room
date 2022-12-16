import { Router } from 'express';
import { messagesController } from '../controllers';
import { verifyJwt } from '../middlewares';

const router = Router();

router.get(
  '/:chatId',
  verifyJwt,
  messagesController.getAll,
)

router.post(
  '/:chatId',
  verifyJwt,
  messagesController.create
)

export default router;