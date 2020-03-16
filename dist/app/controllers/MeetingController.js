"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Meeting = require('../models/Meeting'); var _Meeting2 = _interopRequireDefault(_Meeting);

class MeetingController {
  async store(req, res) {
    const schema = Yup.object().shape({
      date: Yup.date().required(),
      midweek: Yup.boolean().required(),
      special_week: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const dateExists = await _Meeting2.default.findOne({
      where: { date: req.body.date },
    });

    if (dateExists) {
      return res.status(400).json({ error: 'Date already exists.' });
    }

    const { date, midweek, special_week } = await _Meeting2.default.create(req.body);

    return res.json({
      date,
      midweek,
      special_week,
    });
  }

  async index(req, res) {
    const meetings = await _Meeting2.default.findAll();

    return res.json(meetings);
  }
}

exports. default = new MeetingController();
