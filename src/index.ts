// src/index.ts
import sequelize from './db/connections';
import User from './models/user';
import AppEvent from './models/events';
import { Server } from './models/server';

const startServer = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized');

    const server = new Server();
    server.listen();
  } catch (error) {
    console.error('Unable to synchronize the database:', error);
  }
};

startServer();
