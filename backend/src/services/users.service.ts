import userModel from '../database/models/Users';
import IUser from '../interfaces/user.interface';

interface IUserReturn {
  type: null | string;
  message: IUser[];
}

const getAll = async (): Promise<IUserReturn> => {
  const users = await userModel.findAll();
  return { type: null, message: users};
}

export default {
  getAll,
}