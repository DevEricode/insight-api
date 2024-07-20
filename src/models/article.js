'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      Article.hasMany(models.Comment, {
        foreignKey: 'article_id',
      });
      Article.belongsTo(models.User, {
        foreignKey: 'author_id',
      });
    }
  }
  Article.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Article',
      tableName: 'articles',
    },
  );
  return Article;
};
