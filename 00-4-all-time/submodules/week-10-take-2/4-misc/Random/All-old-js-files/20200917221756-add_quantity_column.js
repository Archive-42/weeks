'use strict';

const {
  sequelize
} = require( "../models" );

module.exports = {
  up: ( queryInterface, Sequelize ) => {
    return queryInterface.addColumn( "Cookies", "quantity", Sequelize.INTEGER );
  },

  down: ( queryInterface, Sequelize ) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
