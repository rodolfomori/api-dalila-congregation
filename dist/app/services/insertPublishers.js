"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Publisher = require('../models/Publisher'); var _Publisher2 = _interopRequireDefault(_Publisher);
var _Assistance = require('../models/Assistance'); var _Assistance2 = _interopRequireDefault(_Assistance);

 async function listPublishers(meeting_id) {
  const publishers = await _Publisher2.default.findAll();

  publishers.map(publisher =>
    _Assistance2.default.create({
      publisher_id: publisher.id,
      meeting_id,
    })
  );
} exports.default = listPublishers;
