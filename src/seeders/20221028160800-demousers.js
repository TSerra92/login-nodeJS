const bcryptHelper = require("../helpers/bcrypt.helpers")

'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        cpf: '11111111111',
        email: 'johndoe@email.com',
        pass: await bcryptHelper.bcryptCreate('senha'),
        tel: '11111111111',
        photo: './imgs/johndoe.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mary Doe',
        cpf: '42424242424',
        email: 'marydoe@email.com',
        pass: await bcryptHelper.bcryptCreate('senha'),
        tel: '202020202',
        photo: './imgs/marydoe.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Peter Doe',
        cpf: '22222222222',
        email: 'peterdoe@email.com',
        pass: await bcryptHelper.bcryptCreate('senha'),
        tel: '151515151',
        photo: './imgs/peterdoe.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
