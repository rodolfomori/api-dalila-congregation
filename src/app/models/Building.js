import { Model, DataTypes } from 'sequelize';

class Building extends Model {
  static init(sequelize) {
    super.init(
      {
        territory: DataTypes.INTEGER,
        block: DataTypes.STRING,
        type: DataTypes.STRING,
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        blocks_quantity: DataTypes.STRING,
        floors_quantity: DataTypes.STRING,
        apartments_quantity: DataTypes.STRING,
        lobby: DataTypes.BOOLEAN,
        intercom: DataTypes.BOOLEAN,
        public_access: DataTypes.BOOLEAN,
        m1: DataTypes.BOOLEAN,
        m2: DataTypes.BOOLEAN,
        m3: DataTypes.BOOLEAN,
        m4: DataTypes.BOOLEAN,
        m5: DataTypes.BOOLEAN,
        m6: DataTypes.BOOLEAN,
        visit: DataTypes.BOOLEAN,
        observations: DataTypes.STRING,
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

export default Building;
