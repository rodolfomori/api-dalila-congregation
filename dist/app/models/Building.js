"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

class Building extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        territory: _sequelize.DataTypes.INTEGER,
        block: _sequelize.DataTypes.STRING,
        type: _sequelize.DataTypes.STRING,
        name: _sequelize.DataTypes.STRING,
        address: _sequelize.DataTypes.STRING,
        blocks_quantity: _sequelize.DataTypes.STRING,
        floors_quantity: _sequelize.DataTypes.STRING,
        apartments_quantity: _sequelize.DataTypes.STRING,
        lobby: _sequelize.DataTypes.BOOLEAN,
        intercom: _sequelize.DataTypes.BOOLEAN,
        public_access: _sequelize.DataTypes.BOOLEAN,
        m1: _sequelize.DataTypes.BOOLEAN,
        m2: _sequelize.DataTypes.BOOLEAN,
        m3: _sequelize.DataTypes.BOOLEAN,
        m4: _sequelize.DataTypes.BOOLEAN,
        m5: _sequelize.DataTypes.BOOLEAN,
        m6: _sequelize.DataTypes.BOOLEAN,
        visit: _sequelize.DataTypes.BOOLEAN,
        observations: _sequelize.DataTypes.STRING,
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

exports. default = Building;
