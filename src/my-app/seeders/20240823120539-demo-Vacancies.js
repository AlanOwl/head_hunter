'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Vacancies', [{
			title: 'frontend-dev',
			text: 'best job',
			englvl: '99',
			grade: 'master',
			tags: 'tag',
			count: 0,
			isActive: true
		}], {});
  },

  async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Vacancies', null, {});
  }
};
