// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.createTable('meetings', {
//       id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       meeting_id: {
//         type: Sequelize.INTEGER,
//         references: { model: 'meetings', key: 'id' },
//         onUpdate: 'CASCADE',
//         onDelete: 'SET NULL',
//         allowNull: false,
//       },
//       publisher_id: {
//         type: Sequelize.INTEGER,
//         references: { model: 'publishers', key: 'id' },
//         onUpdate: 'CASCADE',
//         onDelete: 'SET NULL',
//         allowNull: false,
//       },
//     });
//   },

//   down: queryInterface => {
//     return queryInterface.dropTable('meetings');
//   },
// };
