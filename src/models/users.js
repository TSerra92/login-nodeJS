'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    tel: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    paranoidi: true
  });
  return Users;
};