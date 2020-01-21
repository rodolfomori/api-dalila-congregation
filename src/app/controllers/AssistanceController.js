import * as Yup from 'yup';
import Assistance from '../models/Assistance';

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

  async index(req, res) {
    const assistance = await Assistance.findAll();

    return res.json(assistance);
  }
}

export default new AssistanceController();
