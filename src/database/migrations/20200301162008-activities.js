module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('activities', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      building_id: {
        type: Sequelize.INTEGER,
        references: { model: 'buildings', key: 'id' }, // users belongs to group
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      modality_id: {
        type: Sequelize.INTEGER,
        references: { model: 'modalities', key: 'id' }, // users belongs to group
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      publishers: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      observations: {
        type: Sequelize.STRING(1000),
        allowNull: true,
      },
      apartment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
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
    return queryInterface.dropTable('activities');
  },
};
