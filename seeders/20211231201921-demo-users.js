'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        email: 'juanpablo@mail.com',
        password: '$2b$10$FJY.ajLw3LkkmBCvsnYteeSfHvJ1NmQWBXs40ydDGQ7.yoHApx3ia',
        roleId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        email: 'marian@mail.com',
        password: '$2b$10$FJY.ajLw3LkkmBCvsnYteeSfHvJ1NmQWBXs40ydDGQ7.yoHApx3ia',
        roleId: 2
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
