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
      start_date: {
        type: DataTypes.INTEGER
      },
      end_date: {
        type: DataTypes.INTEGER
      },
      culture: {
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
