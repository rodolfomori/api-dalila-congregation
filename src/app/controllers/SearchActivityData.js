import * as Yup from 'yup';
import { Op } from 'sequelize';
import Activity from '../models/Activity';
import Building from '../models/Building';
import Modality from '../models/Modality';

class SearchActivityData {
  async index(req, res) {
    const schema = Yup.object().shape({
      string_search: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validations fails in new activity' });
    }

    const { string_search } = req.body;

    try {
      const activities = await Activity.findAll({
        where: {
          [Op.or]: [
            { publishers: string_search },
            { apartment: string_search },
          ],
        },
        include: [
          {
            model: Building,
            as: 'building',
            // attributes: ['id', 'name'],
            // order: ['name', 'ASC'],
          },
          {
            model: Modality,
            as: 'modality',
            // attributes: ['id', 'name'],
            // order: ['name', 'ASC'],
          },
        ],
      });
      return res.json(activities);
    } catch (err) {
      return res.status(400).json({ error: 'Fail at search a activity' });
    }
  }
}

export default new SearchActivityData();
