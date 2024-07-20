/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'notices',
      [
        {
          title: 'Primeiro Post',
          content: 'Este é o conteúdo do primeiro post.',
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Segundo Post',
          content: 'Aqui está o conteúdo do segundo post.',
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Terceiro Post',
          content: 'Este é o conteúdo do terceiro post.',
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Quarto Post',
          content: 'Conteúdo do quarto post que está sendo adicionado agora.',
          author_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Quinto Post',
          content: 'Este é o conteúdo do quinto post no sistema.',
          author_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('notices', null, {});
  },
};
