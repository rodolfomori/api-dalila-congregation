import * as Yup from 'yup';
import Meeting from '../models/Meeting';

class MeetingController {
  async store(req, res) {
    const schema = Yup.object().shape({
      date: Yup.date().required(),
      midweek: Yup.boolean().required(),
      special_week: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    // const dateExists = await Meeting.findOne({
    //   where: { date: req.body.date },
    // });

    // if (dateExists) {
    //   return res.status(400).json({ error: 'Date already exists.' });
    // }

    const { date, midweek, special_week } = await Meeting.create(req.body);

    return res.json({
      date,
      midweek,
      special_week,
    });
  }

  async index(req, res) {
    const meetings = await Meeting.findAll();

    return res.json(meetings);
  }
}

export default new MeetingController();
