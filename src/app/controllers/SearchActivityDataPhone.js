import * as Yup from 'yup';
import Activity from '../models/Activity';
import Building from '../models/Building';
import Modality from '../models/Modality';

class SearchActivityDataPhone {
  async index(req, res) {
    const schema = Yup.object().shape({
      phone: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validations fails in new activity' });
    }

    const { phone } = req.body;

    try {
      const activities = await Activity.findAll({
        where: {
          phone,
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
      return res.status(400).json({ error: 'Fail at search a phone' });
    }
  }
}

export default new SearchActivityDataPhone();
