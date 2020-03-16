"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Publisher extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: _sequelize2.default.STRING,
        elder: _sequelize2.default.BOOLEAN,
        ministerial_servant: _sequelize2.default.BOOLEAN,
        pioneer: _sequelize2.default.BOOLEAN,
        baptized: _sequelize2.default.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Group, { foreignKey: 'group_id', as: 'group' });
    this.hasMany(models.Assistance, {
      foreignKey: 'publisher_id',
      as: 'assistances',
    });

    this.hasOne(models.User, {
      foreignKey: 'publisher_id',
      as: 'publisher',
    });
  }
}

exports. default = Publisher;
