'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Añadir columna 'type' a la tabla 'Events'
    await queryInterface.addColumn('Events', 'type', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar columna 'type' de la tabla 'Events'
    await queryInterface.removeColumn('Events', 'type');
  }
};
