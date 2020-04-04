import * as Yup from 'yup';
import Activity from '../models/Activity';
import Building from '../models/Building';
import Modality from '../models/Modality';

class SearchActivityDataTerritoriesAndBuildings {
  async index(req, res) {
    const schema = Yup.object().shape({
      building_id: Yup.number(),
      modality_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validations fails in new activity' });
    }

    const { building_id, modality_id } = req.body;

    try {
      if (modality_id && building_id) {
        const activities = await Activity.findAll({
          where: {
            building_id,
            modality_id,
          },
          include: [
            {
              model: Building,
              as: 'building',
            },
            {
              model: Modality,
              as: 'modality',
            },
          ],
        });
        return res.json(activities);
      }
      if (!modality_id && building_id) {
        const activities = await Activity.findAll({
          where: {
            building_id,
          },
          include: [
            {
              model: Building,
              as: 'building',
            },
            {
              model: Modality,
              as: 'modality',
            },
          ],
        });
        return res.json(activities);
      }
      if (modality_id && !building_id) {
        const activities = await Activity.findAll({
          where: {
            modality_id,
          },
          include: [
            {
              model: Building,
              as: 'building',
            },
            {
              model: Modality,
              as: 'modality',
            },
          ],
        });
        return res.json(activities);
      }
      return null;
    } catch (err) {
      return res.status(400).json({ error: 'Fail at search a activity' });
    }
  }
}

export default new SearchActivityDataTerritoriesAndBuildings();
