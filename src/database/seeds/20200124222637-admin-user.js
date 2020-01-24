const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Rodolfo',
          email: 'rodolfo@email.com',
          password_hash: bcrypt.hashSync('123456', 8),
          admin: true,
          elder: false,
          ministerial_servant: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Felipe',
          email: 'felipe@email.com',
          password_hash: bcrypt.hashSync('123456', 8),
          admin: false,
          elder: true,
          ministerial_servant: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Paulo',
          email: 'paulo@email.com',
          password_hash: bcrypt.hashSync('123456', 8),
          admin: false,
          elder: false,
          ministerial_servant: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
