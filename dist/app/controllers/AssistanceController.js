"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _sequelize = require('sequelize');
var _Assistance = require('../models/Assistance'); var _Assistance2 = _interopRequireDefault(_Assistance);
var _Publisher = require('../models/Publisher'); var _Publisher2 = _interopRequireDefault(_Publisher);

class AssistanceController {
  async store(req, res) {
    const schema = Yup.object().shape({
      present: Yup.boolean().required(),
      publisher_id: Yup.number().required(),
      meeting_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    // const publisher = await Publisher.findByPk(req.body.publisher_id);

    // if (!publisher) {
    //   return res.status(404).json({ error: 'Publisher not found' });
    // }

    const { present, publisher, meeting } = await _Assistance2.default.create(req.body);

    return res.json({
      present,
      publisher,
      meeting,
    });
  }

  async update(req, res) {

    const meetingID = req.params.meeting_id;
    const publishers = req.body.present_publishers;
    const { assistance } = req.body;

    assistance.forEach(async function(key) {
      await _Assistance2.default.update(
        { present: key.present },
        {
          where: {
            [_sequelize.Op.and]: [
              { meeting_id: meetingID },
              { publisher_id: key.publisher.id },
            ],
          },
        }
      );
      // console.log(key, publishers[key]);
    });

    // Object.keys(publishers).forEach(async function(key) {
    //   await Assistance.update(
    //     { present: publishers[key] },
    //     {
    //       where: {
    //         [Op.and]: [{ meeting_id: meetingID }, { publisher_id: key }],
    //       },
    //     }
    //   );
    //   // console.log(key, publishers[key]);
    // });

    return res.json({ message: 'WORKS' });
  }

  async index(req, res) {
    const { meeting_id, group_id } = req.params;

    const assistance = await _Assistance2.default.findAll({
      where: { meeting_id },
      include: {
        model: _Publisher2.default,
        // order: [[Publisher, 'name']],
        as: 'publisher',
        attributes: ['id', 'group_id', 'name'],
        order: ['name', 'ASC'],
        where: {
          group_id,
        },
      },
    });

    return res.json(assistance);
  }
}

exports. default = new AssistanceController();
