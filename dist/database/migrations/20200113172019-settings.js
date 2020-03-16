"use strict";module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('settings', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      midweek: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      weekend: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      midweek_time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      weekend_time: {
        type: Sequelize.TIME,
        allowNull: false,
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
    return queryInterface.dropTable('settings');
  },
};
