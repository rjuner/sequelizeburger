'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('theBurgers', [
      {
      name: 'John T. Burger', 
      devoured: false
      }, 
      {
      name: 'Lola T. Burger', 
      devoured: false
      }, 
      {
      name: 'Mission Burger', 
      devoured: false
      }, 
      {
      name: 'Ranch Burger', 
      devoured: false
      }, 
      {
      name: 'Ahi Burger', 
      devoured: false
      }, 
    ], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('theBurgers', null, {});

  }
};
