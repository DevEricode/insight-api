'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Article, {
        foreignKey: 'author_id',
      });

      User.hasMany(models.Notice, {
        foreignKey: 'author_id',
      });

      User.hasMany(models.Comment, {
        foreignKey: 'user_id',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      birthday: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
    },
  );
  return User;
};
