import { Model, DataTypes } from 'sequelize';

class Modality extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        nickname: DataTypes.STRING,
        number: DataTypes.INTEGER,
        information: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // static associate(models) {
  // this.hasMany(models.Building, {
  //   foreignKey: 'modality_id',
  //   as: 'modality',
  // });
  // this.hasMany(models.User, { foreignKey: 'group_id', as: 'users' });
  // }
}

export default Modality;
