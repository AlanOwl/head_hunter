'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacancies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate({ Users }) {
			this.belongsToMany(Users, { through: 'VacanciesUser' })
    }
  }
  Vacancies.init({
		title: {
			type: DataTypes.STRING,
			defaultValue: "",
		},
		text: {
			type: DataTypes.STRING,
			defaultValue: "",
		},
		englvl: {
			type: DataTypes.STRING,
			defaultValue: "",
		},
		grade: {
			type: DataTypes.STRING,
			defaultValue: "",
		},
		tags: {
			type: DataTypes.STRING,
			defaultValue: "",
		},
		count: {
			defaultValue: 0,
			type: DataTypes.INTEGER,
		},
		isActive: {
			defaultValue: true,
			type: DataTypes.BOOLEAN,
		},
  }, {
    sequelize,
    modelName: 'Vacancies',
		timestamps: false,
  });
  return Vacancies;
};