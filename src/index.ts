import sequelize from './db/connections';
import { Server } from './models/server';

const server = new Server();

async function main() {
  try {
    await sequelize.sync(); // Sin `force: true`
    console.log('Database synchronized');
    server.listen();
  } catch (error) {
    console.error('Unable to synchronize the database:', error);
  }
}

main();
