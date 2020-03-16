"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Publisher = require('../models/Publisher'); var _Publisher2 = _interopRequireDefault(_Publisher);

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      publisher_id: Yup.number(),
      admin: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const userExists = await _User2.default.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, admin, email, publisher_id } = await _User2.default.create(
      req.body
    );

    return res.json({
      id,
      name,
      admin,
      email,
      publisher_id,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string()
        .email()
        .required(),
      admin: Yup.boolean(),
      publisher_id: Yup.string(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const {
      email,
      oldPassword,
      admin,
      ministerial_servant,
      elder,
      group_id,
      publisher_id,
    } = req.body;

    const user = await _User2.default.findByPk(req.userId);

    if (admin) {
      if (user.admin === false) {
        return res
          .status(400)
          .json({ error: 'You are not a Admin, access denied.' });
      }
    }

    if (email !== user.email) {
      const userExists = await _User2.default.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match.' });
    }

    await user.update(req.body);

    const { id, name } = await _User2.default.findByPk(req.userId);

    return res.json({
      id,
      name,
      email,
      admin,
      ministerial_servant,
      elder,
      group_id,
      publisher_id,
    });
  }

  async index(req, res) {
    const users = await _User2.default.findAll({
      include: [
        {
          model: _Publisher2.default,
          as: 'publisher',
          attributes: ['group_id', 'elder', 'ministerial_servant', 'pioneer'],
        },
      ],
    });

    return res.json(users);
  }

  async delete(req, res) {
    await _User2.default.destroy({
      where: { id: req.params.id },
    });

    return res.json('User Deleted');
  }
}

exports. default = new UserController();
