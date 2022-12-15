import { INTEGER, Model } from 'sequelize';
import db from '.';
import IUserMessages from '../../interfaces/userMessages.interface';
import Chats from './Chats';
import Messages from './Messages';
import Users from './Users';

class UserMessages extends Model implements IUserMessages{
  declare userId?: number;
  declare chatId?: number;
  declare messageId?: number;
}

UserMessages.init({
  userId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  chatId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  messageId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  sequelize: db,
  modelName: 'user_messages',
  tableName: 'user_messages',
  timestamps: false,
  underscored: true,
})

UserMessages.belongsTo(Users, {
  foreignKey: 'user_id',
});

UserMessages.belongsTo(Chats, {
  foreignKey: 'chat_id',
});

UserMessages.belongsTo(Messages, {
  foreignKey: 'message_id',
});

export default UserMessages