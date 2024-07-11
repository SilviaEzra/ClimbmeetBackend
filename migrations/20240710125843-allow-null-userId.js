'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Cambiar el tipo de userId
    await queryInterface.changeColumn('Events', 'userId', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true,
    });

    // Añadir la clave foránea nuevamente
    await queryInterface.addConstraint('Events', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'events_ibfk_1', // nombre de la clave foránea (puede ser diferente en tu caso)
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revertir la columna userId a NOT NULL
    await queryInterface.changeColumn('Events', 'userId', {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
    });

    // Añadir la clave foránea nuevamente
    await queryInterface.addConstraint('Events', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'events_ibfk_1', // nombre de la clave foránea (puede ser diferente en tu caso)
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
};
