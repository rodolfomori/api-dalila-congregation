"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

class Group extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        number: _sequelize.DataTypes.INTEGER,
        leader: _sequelize.DataTypes.STRING,
        assistant: _sequelize.DataTypes.STRING,
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
    // this.hasMany(models.User, { foreignKey: 'group_id', as: 'users' });
  }
}

exports. default = Group;
