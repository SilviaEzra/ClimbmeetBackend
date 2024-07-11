import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connections';

class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public address!: string;
  public gender!: string;
  public climbingType!: string;
  public climbingLevel!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Unknown',
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Unknown',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'unknown@example.com',
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Unknown',
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Unknown',
    },
    climbingType: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Unknown',
    },
    climbingLevel: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Unknown',
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;
