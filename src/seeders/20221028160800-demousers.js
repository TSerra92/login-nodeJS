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
        dateOfBirth: '04/01/1991',
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
        dateOfBirth: '14/02/1995',
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
        dateOfBirth: '10/05/1998',
        tel: '151515151',
        photo: './imgs/peterdoe.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Desenvolvedor',
        cpf: '33333333333',
        email: 'desenvolvedor@email.com',
        pass: await bcryptHelper.bcryptCreate('senha'),
        dateOfBirth: '10/05/1998',
        tel: '151515151',
        photo: './imgs/desenvolvedor.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Admin',
        cpf: '44444444444',
        email: 'admin@email.com',
        pass: await bcryptHelper.bcryptCreate('senha'),
        dateOfBirth: '10/05/1998',
        tel: '151515151',
        photo: './imgs/admin.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
