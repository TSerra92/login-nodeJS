'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permissions', [{
      name: 'Permissao1',
      description: 'Permissão de teste 1'
    },
    {
      name: 'Permissao2',
      description: 'Permissão de teste 2'
    },
    {
      name: 'Permissao3',
      description: 'Permissão de teste 3'
    }
  ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
