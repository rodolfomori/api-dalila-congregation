module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'publisher_id', {
      type: Sequelize.INTEGER,
      references: { model: 'publishers', key: 'id' }, // user belongs to group
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'publisher_id');
  },
};






