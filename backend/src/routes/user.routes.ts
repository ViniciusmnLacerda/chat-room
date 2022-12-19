import { Router } from 'express';
import { usersController } from '../controllers';
import { loginMiddleware, signupMiddleware, verifyJwt } from '../middlewares';

const router = Router();

router.get(
  '/',
  verifyJwt, 
  usersController.getAll);

router.get(
  '/:email',
  verifyJwt,
  usersController.getUser,
)

router.post(
  '/login',
  loginMiddleware,
  usersController.login,
);

router.post(
  '/signup', 
  signupMiddleware,
  usersController.signup,
);

export default router;