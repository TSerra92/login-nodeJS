'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles_Permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Roles.belongsToMany(models.Permissions, {
        through: Roles_Permissions,
        uniqueKey: 'id_role',
        foreignKey: 'id_role',
        constraint: true
      })

      models.Permissions.belongsToMany(models.Roles, {
        through: Roles_Permissions,
        uniqueKey: 'id_permission',
        foreignKey: 'id_permission',
        constraint: true
      })

      //!SuperManyToMany
      models.Permissions.hasMany(Roles_Permissions, {foreignKey: 'id_permission'})
      Roles_Permissions.belongsTo(models.Permissions, {foreignKey: 'id_permission'})
      models.Roles.hasMany(Roles_Permissions, {foreignKey: 'id_role'})
      Roles_Permissions.belongsTo(models.Roles, {foreignKey: 'id_role'})
    }
  }
  
  Roles_Permissions.init({
    id_role: DataTypes.INTEGER,
    id_permission: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Roles_Permissions'
  });
  return Roles_Permissions;
};