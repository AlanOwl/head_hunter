'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vacancies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
			text: {
				type: Sequelize.STRING
			},
			englvl: {
				type: Sequelize.STRING
			},
			grade: {
				type: Sequelize.STRING
			},
			tags: {
				type: Sequelize.STRING
			},
			count: {
				type: Sequelize.INTEGER
			},
			isActive: {
				type: Sequelize.BOOLEAN
			},
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vacancies');
  }
};