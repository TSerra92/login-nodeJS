'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Roles_Permissions', [{
      id_role: '1',
      id_permission: '2'
    },
    {
      id_role: '2',
      id_permission: '3'
    },
    {
      id_role: '3',
      id_permission: '4'
    }
  
  
  
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users_Permissions', null, {});
    
  }
};
