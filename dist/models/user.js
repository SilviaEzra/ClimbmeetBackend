"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/user.ts
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
        unique: true, // Asegura que el username sea único
    },
    password: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    firstName: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true,
    },
    lastName: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true,
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true,
        unique: true, // Asegura que el email sea único
    },
    address: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true,
    },
    gender: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true,
    },
    climbingType: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true,
    },
    climbingLevel: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true,
    },
    profileImage: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true,
    },
}, {
    sequelize: connections_1.default,
    tableName: 'users',
});
exports.default = User;
