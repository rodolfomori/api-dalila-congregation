"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

class Modality extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: _sequelize.DataTypes.STRING,
        number: _sequelize.DataTypes.INTEGER,
        information: _sequelize.DataTypes.STRING,
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

exports. default = Modality;
