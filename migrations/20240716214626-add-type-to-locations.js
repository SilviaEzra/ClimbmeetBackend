'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Locations', 'type', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Locations', 'type');
  }
};
