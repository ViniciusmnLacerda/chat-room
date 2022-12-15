import { INTEGER, Model } from "sequelize";
import db from '.';
import IUserChats from "../../interfaces/userChats.interface";
import Chats from "./Chats";
import Users from "./Users";

class UserChats extends Model implements IUserChats {
  declare userId?: number;
  declare chatId?: number;
}

UserChats.init({
  user_id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  chat_id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  sequelize: db,
  modelName: 'user_chats',
  tableName: 'user_chats',
  timestamps: false,
  underscored: true,
})

UserChats.belongsTo(Users, {
  foreignKey: 'user_id',
});

UserChats.belongsTo(Chats, {
  foreignKey: 'chat_id',
});

export default UserChats;