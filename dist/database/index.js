"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _Group = require('../app/models/Group'); var _Group2 = _interopRequireDefault(_Group);
var _Meeting = require('../app/models/Meeting'); var _Meeting2 = _interopRequireDefault(_Meeting);
var _Publisher = require('../app/models/Publisher'); var _Publisher2 = _interopRequireDefault(_Publisher);
var _Setting = require('../app/models/Setting'); var _Setting2 = _interopRequireDefault(_Setting);
var _User = require('../app/models/User'); var _User2 = _interopRequireDefault(_User);
var _Assistance = require('../app/models/Assistance'); var _Assistance2 = _interopRequireDefault(_Assistance);
var _Modality = require('../app/models/Modality'); var _Modality2 = _interopRequireDefault(_Modality);
var _Building = require('../app/models/Building'); var _Building2 = _interopRequireDefault(_Building);
var _Activity = require('../app/models/Activity'); var _Activity2 = _interopRequireDefault(_Activity);

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

const models = [
  _Publisher2.default,
  _User2.default,
  _Group2.default,
  _Meeting2.default,
  _Setting2.default,
  _Assistance2.default,
  _Modality2.default,
  _Building2.default,
  _Activity2.default,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new (0, _sequelize2.default)(_database2.default);

    models
      .map(model => model.init(this.connection))
      .map(
        model => _optionalChain([model, 'optionalAccess', _ => _.associate]) && model.associate(this.connection.models)
      );
  }
}
exports. default = new Database();
