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
  const listOfChatId = [...new Set(onlyId)].filter((i) => i !== id);

  const usersChat = listOfChatId.map(async (u) => userModel.findByPk(u));
  const promiseUsersChat = await Promise.all(usersChat) as IUser[];
  
  const myUsersChat = promiseUsersChat.map((obj, index) => ({
    name: obj.name,
    lastName: obj.lastName,
    username: obj.username,
    image: obj.image,
    chatId: listOfChatId[index],
    userId: obj.id
  })) as IMyChats[];

  return { type: null, message: myUsersChat };
}

export default {
  getAll,
};
