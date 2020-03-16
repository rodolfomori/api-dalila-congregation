"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Modality = require('../models/Modality'); var _Modality2 = _interopRequireDefault(_Modality);

class ModalityController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      number: Yup.number().required(),
      information: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const modalityExists = await _Modality2.default.findOne({
      where: { number: req.body.number },
    });

    if (modalityExists) {
      return res.status(400).json({ error: 'Modality already exists.' });
    }

    const { number, name, information } = await _Modality2.default.create(req.body);

    return res.json({
      number,
      name,
      information,
    });
  }

  async index(req, res) {
    const modalities = await _Modality2.default.findAll();

    return res.json(modalities);
  }

  async show(req, res) {
    const modality = await _Modality2.default.findOne({
      where: { id: req.params.id },
    });

    return res.json(modality);
  }
}

exports. default = new ModalityController();
