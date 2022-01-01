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
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'foto1',
        description: 'esta es la foto numero 1',
        image: 'imagen1.jpeg',
        likes: 0,
        dislikes: 0,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: 'foto2',
        description: 'esta es la foto numero 2',
        image: 'imagen2.jpeg',
        likes: 0,
        dislikes: 0,
        createdAt: new Date,
        updatedAt: new Date
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
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
