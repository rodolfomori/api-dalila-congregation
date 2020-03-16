"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

class Activity extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        date: _sequelize.DataTypes.DATE,
        publishers: _sequelize.DataTypes.STRING,
        observations: _sequelize.DataTypes.STRING,
        apartment: _sequelize.DataTypes.STRING,
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

exports. default = Activity;
