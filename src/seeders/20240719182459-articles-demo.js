/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'articles',
      [
        {
          title: 'First Article',
          content: 'Content of the first article.',
          author_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Second Article',
          content: 'Content of the second article.',
          author_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Third Article',
          content: 'Content of the third article.',
          author_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Fourth Article',
          content: 'Content of the fourth article.',
          author_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Fifth Article',
          content: 'Content of the fifth article.',
          author_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('articles', null, {});
  },
};
