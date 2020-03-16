"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Publisher = require('../models/Publisher'); var _Publisher2 = _interopRequireDefault(_Publisher);
var _Group = require('../models/Group'); var _Group2 = _interopRequireDefault(_Group);

class PublisherController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      group_id: Yup.number().required(),
      elder: Yup.boolean(),
      ministerial_servant: Yup.boolean(),
      pioneer: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const group = await _Group2.default.findOne({ where: { number: req.body.group_id } });

    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
    }

    const {
      name,
      elder,
      ministerial_servant,
      pioneer,
      baptized,
    } = await _Publisher2.default.create(req.body, {
      include: [
        {
          model: _Group2.default,
          as: 'group',
          attributes: ['id', 'number'], // ARRUMAR
        },
      ],
    });

    return res.json({
      name,
      group,
      elder,
      ministerial_servant,
      pioneer,
      baptized,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      group_id: Yup.number().required(),
      elder: Yup.boolean(),
      ministerial_servant: Yup.boolean(),
      pioneer: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const publisher = await _Publisher2.default.findByPk(req.params.id, {
      include: [
        {
          model: _Group2.default,
          as: 'group_id',
          attributes: ['name', 'leader'],
        },
      ],
    });

    const {
      name,
      elder,
      group_id,
      ministerial_servant,
      pioneer,
    } = await publisher.update(req.body);

    // const { avatar, id, name } = await User.findByPk(req.userId, {
    //   include: [
    //     {
    //       model: File,
    //       as: 'avatar',
    //       attributes: ['id', 'path', 'url'],
    //     },
    //   ],
    // });

    return res.json({
      name,
      ministerial_servant,
      elder,
      pioneer,
      group_id,
    });
  }

  async index(req, res) {
    const publishers = await _Publisher2.default.findAll({
      include: { association: 'group' },
    });

    return res.json(publishers);
  }

  async show(req, res) {
    const publisher = await _Publisher2.default.findOne({
      where: { id: req.params.id },
    });

    return res.json(publisher);
  }
}

exports. default = new PublisherController();
