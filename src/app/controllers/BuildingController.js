// import * as Yup from 'yup';
import Building from '../models/Building';

class BuildingController {
  async store(req, res) {
    // const schema = Yup.object().shape({
    //   name: Yup.string().required(),
    //   number: Yup.number().required(),
    //   information: Yup.string(),
    // });

    // if (!(await schema.isValid(req.body))) {
    //   return res.status(400).json({ error: 'Validations fails' });
    // }

    await Building.create(req.body);

    return res.json(req.body);
  }

  async index(req, res) {
    const buildings = await Building.findAll();

    return res.json(buildings);
  }

  async show(req, res) {
    const buildings = await Building.findAll({
      where: { territory: req.params.id },
    });
    return res.json(buildings);
  }
}

export default new BuildingController();
