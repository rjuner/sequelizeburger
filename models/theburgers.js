'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var theBurgers = sequelize.define('theBurgers', {
    name: DataTypes.STRING,
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      },
    createdAt: {
      allowNull: false, 
      type: Sequelize.DATE, 
      defaultValue: Date.now()
      },
    updatedAt: {
        allowNull: false, 
        type: Sequelize.DATE, 
        defaultValue: Date.now()
      }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return theBurgers;
};