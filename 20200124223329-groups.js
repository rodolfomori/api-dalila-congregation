module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'groups',
      [
        {
          number: 1,
          leader: 'Laércio',
          assistant: 'Daniel',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          number: 2,
          leader: 'Fernando',
          assistant: 'Paulo',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          number: 3,
          leader: 'Felipe',
          assistant: 'Paulo',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('groups', null, {});
  },
};
