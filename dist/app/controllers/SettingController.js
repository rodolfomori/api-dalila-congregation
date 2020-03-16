"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Setting = require('../models/Setting'); var _Setting2 = _interopRequireDefault(_Setting);

class SettingController {
  async store(req, res) {
    const schema = Yup.object().shape({
      weekend: Yup.number().required(),
      midweek: Yup.number().required(),
      weekend_time: Yup.string().required(),
      midweek_time: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const settings = await _Setting2.default.findAll();

    if (settings.length > 0) {
      return res
        .status(405)
        .json({ error: 'Settings already exists, try update!' });
    }

    const { weekend, midweek, weekend_time, midweek_time } = req.body;
    const id = 1001;

    await _Setting2.default.create({ id, weekend, midweek, weekend_time, midweek_time });

    return res.json({
      id,
      weekend,
      midweek,
      weekend_time,
      midweek_time,
    });
  }

  async index(req, res) {
    const settings = await _Setting2.default.findAll();

    return res.json({ settings });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      weekend: Yup.number().required(),
      midweek: Yup.number().required(),
      weekend_time: Yup.string().required(),
      midweek_time: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const setting = await _Setting2.default.findByPk(1001);

    const {
      weekend,
      midweek,
      weekend_time,
      midweek_time,
    } = await setting.update(req.body);

    return res.json({ weekend, midweek, weekend_time, midweek_time });
  }
}

exports. default = new SettingController();
