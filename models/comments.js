"use strict"
module.exports = function(sequelize, DataTypes) {
  var comments = sequelize.define('comments', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    date: DataTypes.DATE,
    artwork_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    timestamps: false,

    classMethods: {
      associate: function(models) {
        comments.belongsTo(models.users, { foreignKey: 'user_id' });

        comments.belongsTo(models.artworks, { foreignKey: 'artwork_id' });
      }
    }
  });
  return comments;
};
