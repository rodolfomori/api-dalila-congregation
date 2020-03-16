import { Model, DataTypes } from 'sequelize';

class Activity extends Model {
  static init(sequelize) {
    super.init(
      {
        date: DataTypes.DATE,
        publishers: DataTypes.STRING,
        observations: DataTypes.STRING,
        apartment: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Building, {
      foreignKey: 'building_id',
      as: 'building',
    });
    this.belongsTo(models.Modality, {
      foreignKey: 'modality_id',
      as: 'modality',
    });
  }
}

export default Activity;
