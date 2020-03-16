"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Meeting extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        date: _sequelize2.default.DATE,
        midweek: _sequelize2.default.BOOLEAN,
        special_week: _sequelize2.default.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Assistance, {
      foreignKey: 'meeting_id',
      as: 'assistances',
    });
  }
}

exports. default = Meeting;
