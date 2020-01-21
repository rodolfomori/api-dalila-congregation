import Sequelize, { Model } from 'sequelize';

class Publisher extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        elder: Sequelize.BOOLEAN,
        ministerial_servant: Sequelize.BOOLEAN,
        pioneer: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Group, { foreignKey: 'group_id', as: 'group' });
    this.hasMany(models.Assistance, {
      foreignKey: 'publisher_id',
      as: 'assistances',
    });
  }
}

export default Publisher;
