'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [{
      name: 'Desenvolvedor',
      description: 'Role de desenvolvimento. Deve ter todas as permissões.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Admin',
      description: 'Role de administração. Deve ter algumas permissões.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Usuário',
      description: 'Role de user.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {})
  }
};
