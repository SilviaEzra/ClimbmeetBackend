'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Eliminar índices redundantes de la tabla Users
    const indexes = await queryInterface.showIndex('Users');
    for (const index of indexes) {
      if (index.name !== 'PRIMARY' && index.name !== 'desired_index_name') {
        await queryInterface.removeIndex('Users', index.name);
      }
    }

    // Cambiar la columna username para garantizar que es única
    await queryInterface.changeColumn('Users', 'username', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Nota: Aquí no estamos recreando los índices eliminados en `up`
    await queryInterface.changeColumn('Users', 'username', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    });
  }
};
