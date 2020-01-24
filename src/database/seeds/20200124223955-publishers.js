module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'groups',
      [
        {
          id: 1,
          number: 1,
          leader: 'Laércio',
          assistant: 'Daniel',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          number: 2,
          leader: 'Fernando',
          assistant: 'Paulo',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          number: 3,
          leader: 'Felipe',
          assistant: 'Paulo',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    const groups = await queryInterface.sequelize.query(
      `SELECT id from GROUPS;`
    );

    const groupRows = groups[0];

    return queryInterface.bulkInsert(
      'publishers',
      [
        {
          name: 'João',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: true,
          pioneer: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Pietro',
          group_id: groupRows[0].id,
          elder: true,
          ministerial_servant: true,
          pioneer: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Maria',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Carlos',
          group_id: groupRows[1].id,
          elder: true,
          ministerial_servant: false,
          pioneer: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Alberto',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Mario',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Pedro',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: true,
          pioneer: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Catarina',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Patricia',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Pedrinho',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('groups', null, {});
    await queryInterface.bulkDelete('publishers', null, {});
  },
};
