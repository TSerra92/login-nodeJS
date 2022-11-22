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
      models.Users.belongsToMany(models.Permissions, {
        through: Users_Permissions,
        uniqueKey: 'id_user',
        foreignKey: 'id_user',
        constraint: true
      })

      models.Permissions.belongsToMany(models.Users, {
        through: Users_Permissions,
        uniqueKey: 'id_permission',
        foreignKey: 'id_permission',
        constraint: true
      })
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