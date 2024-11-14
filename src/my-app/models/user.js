'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ Vacancies }) {
			this.belongsToMany(Vacancies, { through: 'VacanciesUser' })

				// hasMany(Vacancies, { foreignKey: 'usersId' });
		}
	}
	User.init({
		password: {
			type: DataTypes.STRING,
			defaultValue: "",
		},
		vacancies: {
			defaultValue: [],
			type: DataTypes.ARRAY(DataTypes.INTEGER),
		},
		login: {
			type: DataTypes.STRING,
			defaultValue: "",
		},
		role: {
			type: DataTypes.STRING,
			defaultValue: "",
		}
	}, {
		sequelize,
		modelName: 'Users',
		timestamps: false,
	});
	return User;
};