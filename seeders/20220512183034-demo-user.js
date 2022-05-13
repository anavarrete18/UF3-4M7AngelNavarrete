'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
       username: 'Angel',
       password: 'Angel',
       email: 'angel@gmail.com'
      }], {});
      await queryInterface.bulkInsert('users', [{
        username: 'Aiton',
        password: 'Aiton',
        email: 'aiton@gmail.com'
       }], {});
       await queryInterface.bulkInsert('users', [{
        username: 'Gasbriel',
        password: 'Gasbriel',
        email: 'gasbriel@gmail.com'
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
