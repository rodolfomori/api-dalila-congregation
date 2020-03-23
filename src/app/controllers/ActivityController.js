import * as Yup from 'yup';
import Activity from '../models/Activity';
import Building from '../models/Building';
import Modality from '../models/Modality';

class ActivityController {
  async store(req, res) {
    const schema = Yup.object().shape({
      building_id: Yup.number().required(),
      date: Yup.date().required(),
      modality_id: Yup.number().required(),
      publishers: Yup.string().required(),
      observations: Yup.string().required(),
      apartment: Yup.string().required(),
      phone: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validations fails in new activity' });
    }

    try {
      await Activity.create(req.body);
      return res.json(req.body);
    } catch (err) {
      return res.status(400).json({ error: 'Fail at add new activity' });
    }
  }

  async index(req, res) {
    try {
      const activities = await Activity.findAll({
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
      return res.status(400).json({ error: 'Validations fails' });
    }
  }

  // async show(req, res) {
  //   const modality = await Modality.findOne({
  //     where: { id: req.params.id },
  //   });

  //   return res.json(modality);
  // }
}

export default new ActivityController();
