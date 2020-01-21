import Sequelize, { Model } from 'sequelize';

class Assistance extends Model {
  static init(sequelize) {
    super.init(
      {
        present: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Publisher, {
      foreignKey: 'publisher_id',
      as: 'publisher',
    });
    this.belongsTo(models.Meeting, {
      foreignKey: 'meeting_id',
      as: 'meeting',
    });
  }
}

export default Assistance;
