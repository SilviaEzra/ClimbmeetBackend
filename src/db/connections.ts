import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sprint9', 'root', 'admin123', {
  host: 'localhost',
  port: 3308, // Asegúrate de que este puerto es el correcto
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
