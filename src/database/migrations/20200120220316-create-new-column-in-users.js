module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'group_id', {
      type: Sequelize.INTEGER,
      references: { model: 'groups', key: 'id' }, // user belongs to group
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'group_id');
  },
};


