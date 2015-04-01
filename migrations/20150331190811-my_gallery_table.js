"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('artworks_users', {
      artwork_id: {
        type: DataTypes.INTEGER
      },

      user_id: {
        type: DataTypes.INTEGER
      }
    }).done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable('artworks_users').done(done);
  }
};
