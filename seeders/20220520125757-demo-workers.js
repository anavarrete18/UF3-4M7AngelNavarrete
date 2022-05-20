'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('workers', [{
      name: 'Angel',
      surnames: 'Navarrete Sanchez',
      age: parseInt(19),
      password: '1234',
      email: 'angel@gmail.com',
      ageIncorporation: new Date('May 05, 2022 03:24:00')
     }], {});
     await queryInterface.bulkInsert('workers', [{
      name: 'Aitor',
      surnames: 'Fuentes Pulido',
      age: parseInt(24),
      password: '1234',
      email: 'aitor@gmail.com',
      ageIncorporation: new Date('May 10, 2022 10:55:00')
     }], {});await queryInterface.bulkInsert('workers', [{
      name: 'Gabriel',
      surnames: 'Pedrosa Garcia',
      age: parseInt(20),
      password: '1234',
      email: 'gabriel@gmail.com',
      ageIncorporation: new Date('May 07, 2022 08:50:00')
     }], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
