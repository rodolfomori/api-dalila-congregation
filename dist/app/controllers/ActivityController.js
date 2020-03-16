"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// import * as Yup from 'yup';
var _Activity = require('../models/Activity'); var _Activity2 = _interopRequireDefault(_Activity);

class ActivityController {
  async store(req, res) {
    // const schema = Yup.object().shape({
    //   name: Yup.string().required(),
    //   number: Yup.number().required(),
    //   information: Yup.string(),
    // });

    // if (!(await schema.isValid(req.body))) {
    //   return res.status(400).json({ error: 'Validations fails' });
    // }

    await _Activity2.default.create(req.body);

    return res.json(req.body);
  }

  async index(req, res) {
    const activities = await _Activity2.default.findAll();

    return res.json({ activities });
  }

  // async show(req, res) {
  //   const modality = await Modality.findOne({
  //     where: { id: req.params.id },
  //   });

  //   return res.json(modality);
  // }
}

exports. default = new ActivityController();
