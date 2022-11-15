'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users_Permissions.init({
    id_user: DataTypes.INTEGER,
    id_permission: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users_Permissions',
  });
  return Users_Permissions;
};