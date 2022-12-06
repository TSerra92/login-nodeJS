'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permissions', [{
      name: 'list_users',
      description: 'Permissão para consultar todos os usuários registrados.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'edit_own_user',
      description: 'Permissão para editar o prório usuário.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'edit_other_user',
      description: 'Permissão para editar outro usuário.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'delete_own_user',
      description: 'Permissão para deletar o prório usuário.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'delete_other_user',
      description: 'Permissão para deletar o prório usuário.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'define_acl_user',
      description: 'Permissão para definir as roles e as permissions de um usuário. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'register_roles',
      description: 'Permissão para definir as roles e as permissions de um usuário. ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'list_roles',
      description: 'Permissão para consultar todas as roles cadastradas.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'edit_roles',
      description: 'Permissão para editar uma role.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'delete_roles',
      description: 'Permissão para deletar uma role.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'register_roles_permissions',
      description: 'Permissão para registrar as permissões de uma role.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'register_permissions',
      description: 'Permissão para registrar novas permissões',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'list_permissions',
      description: 'Permissão para consultar as permissões registradas.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'edit_permissions',
      description: 'Permissão para editar as permissões já registradas.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'delete_permissions',
      description: 'Permissão para deletar uma permissão.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
