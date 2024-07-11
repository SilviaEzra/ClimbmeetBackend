"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Unknown',
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Unknown',
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'unknown@example.com',
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Unknown',
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Unknown',
    },
    climbingType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Unknown',
    },
    climbingLevel: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Unknown',
    },
}, {
    sequelize: connections_1.default,
    modelName: 'User',
});
exports.default = User;
