import { Router } from 'express';
import { chatsController } from '../controllers';
import { verifyJwt } from '../middlewares';

const router = Router();

router.get(
  '/', 
  verifyJwt,
  chatsController.getAll)

export default router;