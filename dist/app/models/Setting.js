"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Setting extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        weekend: _sequelize2.default.INTEGER,
        midweek: _sequelize2.default.INTEGER,
        weekend_time: _sequelize2.default.TIME,
        midweek_time: _sequelize2.default.TIME,
      },
      {
        sequelize,
      }
    );
  }
}

exports. default = Setting;
