'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users_Roles', [{
      id_user: '1',
      id_role: '2'
    },
    {
      id_user: '2',
      id_role: '3'
    },
    {
      id_user: '3',
      id_role: '4'
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users_Roles', null, {});
  }
};
