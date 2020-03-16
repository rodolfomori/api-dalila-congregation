import * as Yup from 'yup';
import Modality from '../models/Modality';

class ModalityController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      number: Yup.number().required(),
      information: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const modalityExists = await Modality.findOne({
      where: { number: req.body.number },
    });

    if (modalityExists) {
      return res.status(400).json({ error: 'Modality already exists.' });
    }

    const { number, name, information } = await Modality.create(req.body);

    return res.json({
      number,
      name,
      information,
    });
  }

  async index(req, res) {
    const modalities = await Modality.findAll();

    return res.json(modalities);
  }

  async show(req, res) {
    const modality = await Modality.findOne({
      where: { id: req.params.id },
    });

    return res.json(modality);
  }
}

export default new ModalityController();
