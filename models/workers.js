'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Workers.init({
    name: DataTypes.STRING,
    surnames: DataTypes.STRING,
    age: DataTypes.INTEGER,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    ageIncorporation: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Workers',
  });
  return Workers;
};