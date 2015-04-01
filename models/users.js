"use strict"
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    name: DataTypes.STRING,
    username: { DataTypes.STRING, notNull: {'Must provide a username'}},
    avatar: DataTypes.TEXT,
    password: { DataTypes.STRING, notNull: {'Must provide a password'}},
    bio: DataTypes.TEXT
  }, {

    timestamps: false,

    classMethods: {
      associate: function(models) {

        //users has m-m relationship with artworks
        users.belongsToMany(models.artworks, {
          through: 'artworks_users',
          foreign_key: 'user_id'
        });
        //users has one-many relationship with comments
        users.hasMany(models.comments, { foreignKey: 'user_id',
                                         onDelete: 'cascade',
                                         hooks: true });
      }
    }
  });
  return users;
};
