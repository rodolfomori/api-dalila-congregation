"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Group = require('../models/Group'); var _Group2 = _interopRequireDefault(_Group);

class GroupController {
  async store(req, res) {
    const schema = Yup.object().shape({
      number: Yup.number().required(),
      leader: Yup.string().required(),
      assistant: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const groupExists = await _Group2.default.findOne({
      where: { number: req.body.number },
    });

    if (groupExists) {
      return res.status(400).json({ error: 'Group already exists.' });
    }

    const { number, leader, assistant } = await _Group2.default.create(req.body);

    return res.json({
      number,
      leader,
      assistant,
    });
  }

  async index(req, res) {
    const groups = await _Group2.default.findAll({
      include: { association: 'publishers' },
      order: [['number', 'ASC']],
    });

    return res.json(groups);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      number: Yup.number().required(),
      leader: Yup.string().required(),
      assistant: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const group = await _Group2.default.findByPk(req.params.id);

    const { number, leader, assistant } = await group.update(req.body);

    return res.json({
      number,
      leader,
      assistant,
    });
  }

  async show(req, res) {
    const group = await _Group2.default.findOne({
      where: { id: req.params.id },
      include: { association: 'publishers' },
    });

    return res.json(group);
  }

  // async show(req, res) {
  //   const group = await Group.findOne({
  //     where: { number: req.params.number },
  //     include: { association: 'publishers' },
  //   });

  //   return res.json(group);
  // }
}

exports. default = new GroupController();
