"use strict";module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('assistance', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      present: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      publisher_id: {
        type: Sequelize.INTEGER,
        references: { model: 'publishers', key: 'id' }, // publisher has many attandance
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      meeting_id: {
        type: Sequelize.INTEGER,
        references: { model: 'meetings', key: 'id' }, // meeting has many attandance
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('assistance');
  },
};
