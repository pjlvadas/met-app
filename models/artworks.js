"use strict"
module.exports = function(sequelize, DataTypes) {
  var artworks = sequelize.define('artworks', {
    artist: DataTypes.STRING,
    title: DataTypes.STRING,
    medium: DataTypes.STRING,
    img_url: DataTypes.TEXT,
    gallery_url: DataTypes.STRING,
    date: DataTypes.STRING,

  }, {
    timestamps: false,

    classMethods: {
      associate: function(models) {
        artworks.belongsToMany(models.users, {
          through: 'artworks_users',
          foreignKey: 'artwork_id'
        });
        artworks.hasMany(models.comments, { foreignKey: 'artwork_id' });
      }
    }
  });
  return artworks;
};
