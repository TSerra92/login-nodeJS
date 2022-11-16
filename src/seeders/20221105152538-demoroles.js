'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [{
      name: 'Role1',
      description: 'Role de teste 1'
    },
    {
      name: 'Role2',
      description: 'Role de teste 2'
    },
    {
      name: 'Role3',
      description: 'Role de teste 3'
    },
  ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Permissions', null, {})
  }
};
