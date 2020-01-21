import { Model, DataTypes } from 'sequelize';

class Group extends Model {
  static init(sequelize) {
    super.init(
      {
        number: DataTypes.INTEGER,
        leader: DataTypes.STRING,
        assistant: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Publisher, {
      foreignKey: 'group_id',
      as: 'publishers',
    });
    this.hasMany(models.User, { foreignKey: 'group_id', as: 'users' });
  }
}

export default Group;
