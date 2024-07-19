'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      Comment.belongsTo(models.Article, {
        foreignKey: 'article_id',
      });
    }
  }
  Comment.init(
    {
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments',
    },
  );
  return Comment;
};
