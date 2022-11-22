'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('Users_Permissions', [{
      id_user: '1',
      id_permission: '2'
    },
    {
      id_user: '2',
      id_permission: '3'
    },
    {
      id_user: '3',
      id_permission: '4'
    }
  
  
  
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users_Permissions', null, {});
  }
};
