"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// import * as Yup from 'yup';
var _Building = require('../models/Building'); var _Building2 = _interopRequireDefault(_Building);

class BuildingController {
  async store(req, res) {
    // const schema = Yup.object().shape({
    //   name: Yup.string().required(),
    //   number: Yup.number().required(),
    //   information: Yup.string(),
    // });

    // if (!(await schema.isValid(req.body))) {
    //   return res.status(400).json({ error: 'Validations fails' });
    // }

    await _Building2.default.create(req.body);

    return res.json(req.body);
  }

  async index(req, res) {
    const buildings = await _Building2.default.findAll();

    return res.json(buildings);
  }

  async show(req, res) {
    const buildings = await _Building2.default.findAll({
      where: { territory: req.params.id },
    });
    return res.json(buildings);
  }
}

exports. default = new BuildingController();
