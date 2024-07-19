'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notice extends Model {
    static associate(models) {
      Notice.belongsTo(models.User, {
        foreignKey: 'author_id',
      });
    }
  }
  Notice.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Notice',
      tableName: 'notices',
    },
  );
  return Notice;
};
