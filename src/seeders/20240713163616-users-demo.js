/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          birthday: '1990-01-01',
          email: 'john.doe@example.com',
          password: 'password123',
          role: 'user',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jane Smith',
          birthday: '1985-05-15',
          email: 'jane.smith@example.com',
          password: 'password123',
          role: 'admin',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Alice Johnson',
          birthday: '1978-09-23',
          email: 'alice.johnson@example.com',
          password: 'password123',
          role: 'user',
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bob Brown',
          birthday: '1995-12-11',
          email: 'bob.brown@example.com',
          password: 'password123',
          role: 'admin',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
