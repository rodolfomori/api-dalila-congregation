import Sequelize, { Model } from 'sequelize';

class Meeting extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        midweek: Sequelize.BOOLEAN,
        special_week: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Assistance, {
      foreignKey: 'meeting_id',
      as: 'assistances',
    });
  }
}

export default Meeting;
