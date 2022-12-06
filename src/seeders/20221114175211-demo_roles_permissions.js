'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Roles_Permissions', [{
      id_role: '1',
      id_permission: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '1',
      id_permission: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '1',
      id_permission: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '1',
      id_permission: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '1',
      id_permission: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '1',
      id_permission: '6',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '1',
      id_permission: '7',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '1',
      id_permission: '8',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '1',
      id_permission: '9',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '1',
      id_permission: '10',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '1',
      id_permission: '11',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '1',
      id_permission: '12',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '1',
      id_permission: '13',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '1',
      id_permission: '14',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '1',
      id_permission: '15',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '2',
      id_permission: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '2',
      id_permission: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '2',
      id_permission: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '2',
      id_permission: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '2',
      id_permission: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '2',
      id_permission: '6',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '2',
      id_permission: '7',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '2',
      id_permission: '8',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '2',
      id_permission: '11',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '2',
      id_permission: '12',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '2',
      id_permission: '13',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '3',
      id_permission: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_role: '3',
      id_permission: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles_Permissions', null, {});
    
  }
};
