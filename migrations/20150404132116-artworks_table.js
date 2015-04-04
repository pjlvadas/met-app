"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('artworks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      artist: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING
      },
      date: {
        type: DataTypes.STRING
      },
      gallery_url: {
        type: DataTypes.STRING
      },
      img_url: {
        type: DataTypes.TEXT
      },
      medium: {
        type: DataTypes.STRING
      }
    }).done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable('comments').done(done);
  }
};
