// import * as Yup from 'yup';
import Activity from '../models/Activity';

class ActivityController {
  async store(req, res) {
    // const schema = Yup.object().shape({
    //   name: Yup.string().required(),
    //   number: Yup.number().required(),
    //   information: Yup.string(),
    // });

    // if (!(await schema.isValid(req.body))) {
    //   return res.status(400).json({ error: 'Validations fails' });
    // }

    await Activity.create(req.body);

    return res.json(req.body);
  }

  async index(req, res) {
    const activities = await Activity.findAll();

    return res.json({ activities });
  }

  // async show(req, res) {
  //   const modality = await Modality.findOne({
  //     where: { id: req.params.id },
  //   });

  //   return res.json(modality);
  // }
}

export default new ActivityController();
