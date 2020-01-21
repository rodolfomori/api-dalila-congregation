import * as Yup from 'yup';
import Setting from '../models/Setting';

class SettingController {
  async store(req, res) {
    const schema = Yup.object().shape({
      weekend: Yup.number().required(),
      midweek: Yup.number().required(),
      weekend_time: Yup.string().required(),
      midweek_time: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const settings = await Setting.findAll();

    if (settings.length > 0) {
      return res
        .status(405)
        .json({ error: 'Settings already exists, try update!' });
    }

    const { weekend, midweek, weekend_time, midweek_time } = req.body;
    const id = 1001;

    await Setting.create({ id, weekend, midweek, weekend_time, midweek_time });

    return res.json({
      id,
      weekend,
      midweek,
      weekend_time,
      midweek_time,
    });
  }

  async index(req, res) {
    const settings = await Setting.findAll();

    return res.json({ settings });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      weekend: Yup.number().required(),
      midweek: Yup.number().required(),
      weekend_time: Yup.string().required(),
      midweek_time: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const setting = await Setting.findByPk(1001);

    const {
      weekend,
      midweek,
      weekend_time,
      midweek_time,
    } = await setting.update(req.body);

    return res.json({ weekend, midweek, weekend_time, midweek_time });
  }
}

export default new SettingController();
