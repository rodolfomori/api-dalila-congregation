import * as Yup from 'yup';
import Group from '../models/Group';

class GroupController {
  async store(req, res) {
    const schema = Yup.object().shape({
      number: Yup.number().required(),
      leader: Yup.string().required(),
      assistant: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const groupExists = await Group.findOne({
      where: { number: req.body.number },
    });

    if (groupExists) {
      return res.status(400).json({ error: 'Group already exists.' });
    }

    const { number, leader, assistant } = await Group.create(req.body);

    return res.json({
      number,
      leader,
      assistant,
    });
  }

  async index(req, res) {
    const groups = await Group.findAll({
      include: { association: 'publishers' },
      order: [['number', 'ASC']],
    });

    return res.json(groups);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      number: Yup.number().required(),
      leader: Yup.string().required(),
      assistant: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const group = await Group.findByPk(req.params.id);

    const { number, leader, assistant } = await group.update(req.body);

    return res.json({
      number,
      leader,
      assistant,
    });
  }

  async show(req, res) {
    const group = await Group.findOne({ where: { id: req.params.id } });

    return res.json(group);
  }
}

export default new GroupController();
