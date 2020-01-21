import * as Yup from 'yup';
import Publisher from '../models/Publisher';
import Group from '../models/Group';

class PublisherController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      group_id: Yup.number().required(),
      elder: Yup.boolean(),
      ministerial_servant: Yup.boolean(),
      pioneer: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const group = await Group.findOne({ where: { number: req.body.group_id } });

    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
    }

    const {
      name,
      elder,
      ministerial_servant,
      pioneer,
    } = await Publisher.create(req.body, {
      include: [
        {
          model: Group,
          as: 'group',
          attributes: ['id', 'number'], // ARRUMAR
        },
      ],
    });

    return res.json({
      name,
      group,
      elder,
      ministerial_servant,
      pioneer,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      group_id: Yup.number().required(),
      elder: Yup.boolean(),
      ministerial_servant: Yup.boolean(),
      pioneer: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const publisher = await Publisher.findByPk(req.params.id, {
      include: [
        {
          model: Group,
          as: 'group_id',
          attributes: ['name', 'leader'],
        },
      ],
    });

    const {
      name,
      elder,
      group_id,
      ministerial_servant,
      pioneer,
    } = await publisher.update(req.body);

    // const { avatar, id, name } = await User.findByPk(req.userId, {
    //   include: [
    //     {
    //       model: File,
    //       as: 'avatar',
    //       attributes: ['id', 'path', 'url'],
    //     },
    //   ],
    // });

    return res.json({
      name,
      ministerial_servant,
      elder,
      pioneer,
      group_id,
    });
  }

  async index(req, res) {
    const publishers = await Publisher.findAll({
      include: { association: 'group' },
    });

    return res.json(publishers);
  }
}

export default new PublisherController();
