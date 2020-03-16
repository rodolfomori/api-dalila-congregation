import * as Yup from 'yup';
import { Op } from 'sequelize';
import Assistance from '../models/Assistance';
import Publisher from '../models/Publisher';

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

    const { present, publisher, meeting } = await Assistance.create(req.body);

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
      await Assistance.update(
        { present: key.present },
        {
          where: {
            [Op.and]: [
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

    const assistance = await Assistance.findAll({
      where: { meeting_id },
      include: {
        model: Publisher,
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

export default new AssistanceController();
