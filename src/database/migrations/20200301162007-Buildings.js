module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('buildings', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Sem Nome',
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modality_id: {
        type: Sequelize.INTEGER,
        references: { model: 'modalities', key: 'id' }, // users belongs to group
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      frequency: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ativity_days: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      coordinator: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      publishers: {
        type: Sequelize.STRING,
        allowNull: true,
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
