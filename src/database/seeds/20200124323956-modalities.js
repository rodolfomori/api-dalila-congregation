module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'modalities',
      [
        {
          name: 'Testemunho informal em áreas internas',
          number: 1,
          information: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Testemunho por interfone interno',
          number: 2,
          information: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Testemunho por interfone externo',
          number: 3,
          information: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Testemunho por telefone',
          number: 4,
          information: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Testemunho por carta',
          number: 5,
          information: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Testemunho público em áreas internas',
          number: 6,
          information: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('modalities', null, {});
  },
};
