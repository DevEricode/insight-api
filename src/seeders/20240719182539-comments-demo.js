/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'comments',
      [
        {
          id: 1,
          content: 'Great post! Very informative.',
          user_id: 1,
          notice_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          content: 'I agree with the ideas presented.',
          user_id: 4,
          notice_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          content: 'Excellent content, thanks for sharing!',
          user_id: 1,
          notice_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          content: 'Very useful, I hope to see more posts like this.',
          user_id: 4,
          notice_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          content: 'Thanks for the detailed explanation.',
          user_id: 1,
          notice_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {});
  },
};
