import Sequelize, { Model } from 'sequelize';

class Group extends Model {
  static init(sequelize) {
    super.init(
      {
        number: Sequelize.INTEGER,
        leader: Sequelize.STRING,
        assistant: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Group;
