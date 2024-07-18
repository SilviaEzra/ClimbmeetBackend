// src/models/user.ts
import { DataTypes, Model } from 'sequelize';
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
  public profileImage!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    unique: true, // Asegura que el username sea único
  },
  password: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  firstName: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  lastName: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: true,
    unique: true, // Asegura que el email sea único
  },
  address: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  gender: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  climbingType: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  climbingLevel: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  profileImage: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'users',
});

export default User;
