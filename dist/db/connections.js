"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('sprint9', 'root', 'admin123', {
    host: 'localhost',
    port: 3308, // Cambia el puerto aquí si es necesario
    dialect: 'mysql',
});
sequelize.authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
exports.default = sequelize;
