import { Router } from 'express';
import { usersController } from '../controllers';
import { loginMiddleware, signupMiddleware } from '../middlewares';

const router = Router();

router.get('/', usersController.getAll)

router.post(
  '/login',
  loginMiddleware,
  usersController.login)

router.post(
  '/signup', 
  signupMiddleware,
  usersController.signup);

export default router;