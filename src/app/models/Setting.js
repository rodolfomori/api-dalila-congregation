import Sequelize, { Model } from 'sequelize';

class Setting extends Model {
  static init(sequelize) {
    super.init(
      {
        weekend: Sequelize.INTEGER,
        midweek: Sequelize.INTEGER,
        weekend_time: Sequelize.TIME,
        midweek_time: Sequelize.TIME,
      },
      {
        sequelize,
      }
    );
  }
}

export default Setting;
