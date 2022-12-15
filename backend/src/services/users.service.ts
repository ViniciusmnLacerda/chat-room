import hashPassword from '../auth/hashPassword';
import { createToken } from '../auth/jwtFunctions';
import userModel from '../database/models/Users';
import IReturn from '../interfaces/returns.interface';
import IUser from '../interfaces/user.interface';
import { loginValidation, signupValidation } from './validations';

const getAll = async (): Promise<IReturn<IUser[]>> => {
  const users = await userModel.findAll();
  return { type: null, message: users };
}

//o login será feito com email e password
const login = async (user: IUser): Promise<IReturn<string>> => {
  const { type, message } = await loginValidation(user);
  if (type) return { type, message };
  const token = createToken(user);
  return { type: null, message: token }
}

const signup = async (user: IUser): Promise<IReturn<string>> => {
  const { type, message } = await signupValidation(user);
  if (type) return { type, message}
  const hashedPassword = hashPassword(user.password as string);
  user.password = hashedPassword;
  const newUser = await userModel.create({ ...user });
  const goToHome = await login(newUser);
  return goToHome;
}

export default {
  getAll,
  login,
  signup,
};
