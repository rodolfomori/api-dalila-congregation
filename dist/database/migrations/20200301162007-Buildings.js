"use strict";module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('buildings', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      territory: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      block: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        // prédio, condominio, em construção.
        type: Sequelize.STRING,
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'Sem Nome',
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      blocks_quantity: {
        type: Sequelize.STRING,
        defaultValue: 'N/D',
        allowNull: true,
      },
      floors_quantity: {
        type: Sequelize.STRING,
        defaultValue: 'N/D',
        allowNull: true,
      },
      apartments_quantity: {
        type: Sequelize.STRING,
        defaultValue: 'N/D',
        allowNull: true,
      },
      lobby: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      intercom: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      public_access: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      m1: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      m2: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      m3: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      m4: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      m5: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      m6: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      visit: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      observations: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('buildings');
  },
};
