import userChatsModel from '../database/models/UserChat';
import userModel from '../database/models/Users';
import IMyChats from '../interfaces/myChats.interface';
import IReturn from '../interfaces/returns.interface';
import IUser from '../interfaces/user.interface';

const getAll = async (id: number): Promise<IReturn<IMyChats[]>> => {
  const chats = await userChatsModel.findAll({
    where: { userId: id }
  });

  const promises = chats.map(async ({ chatId }) => {
    const userIds = await userChatsModel.findAll({
      where: { chatId }
    }) 
   return userIds;
  });

  const listOfChats = await Promise.all(promises)
  const onlyId = listOfChats.flat().map(({ userId }) => userId);
  const result = [...new Set(onlyId)].filter((i) => i !== id)

  const promise = result.map(async (u) => userModel.findByPk(u));
  const newResult = await Promise.all(promise) as IUser[];
  const myUsersChat = newResult.map((obj) => ({
    name: obj.name,
    lastName: obj.lastName,
    username: obj.username,
    image: obj.image,
  })) as IMyChats[];

  return { type: null, message: myUsersChat };
}

export default {
  getAll,
};
