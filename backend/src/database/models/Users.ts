import { INTEGER, Model, STRING } from "sequelize";
import db from '.';
import IUser from '../../interfaces/user.interface';

class Users extends Model implements IUser {
  declare id?: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare image?: string;
  declare username: string;
  declare lastName: string;
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  last_name: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  image: {
    type: STRING,
    allowNull: true,
  }
}, {
  sequelize: db,
  modelName: 'users',
  tableName: 'users',
  timestamps: false,
  underscored: true,
})


export default Users;