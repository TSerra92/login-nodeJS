'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Users.belongsToMany(models.Roles, {
        through: Users_Roles,
        uniqueKey: 'id_user',
        foreignKey: 'id_user',
        constraint: true
      })

      models.Roles.belongsToMany(models.Users, {
        through: Users_Roles,
        uniqueKey: 'id_role',
        foreignKey: 'id_role',
        constraint: true
      })

      //!SuperManyToMany
      models.Roles.hasMany(Users_Roles, {foreignKey: 'id_role'})
      Users_Roles.belongsTo(models.Roles, {foreignKey: 'id_role'})
      models.Users.hasMany(Users_Roles, {foreignKey: 'id_user'})
      Users_Roles.belongsTo(models.Users, {foreignKey: 'id_user'})
    }
  }
  Users_Roles.init({
    id_user: DataTypes.INTEGER,
    id_role: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users_Roles'
  });
  return Users_Roles;
};