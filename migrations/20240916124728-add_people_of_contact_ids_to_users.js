'use strict';

var models = require('../lib/model/db');

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.describeTable('Users').then(attributes => {
      if (attributes.hasOwnProperty('people_of_contact_ids')) {
        return 1;
      }

      return queryInterface.addColumn(
        'Users',
        'people_of_contact_ids',
        models.User.attributes.people_of_contact_ids
      )
    });
  },

  down: (queryInterface, Sequelize) => queryInterface
    .removeColumn('Users', 'people_of_contact_ids'),

  };
