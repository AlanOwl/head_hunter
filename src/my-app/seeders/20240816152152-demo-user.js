'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Users', [{
			login: 'uuu',
			password: 'qwerty',
			vacancies: [1],
			role: 'user'

		}], {});
  },

  async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {});
  }
};
