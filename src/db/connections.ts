import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sprint9', 'root', 'admin123', {
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

export default sequelize;
