'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert('genera', [{
      genus: 'Ariocarpus',
      country: 'Mexico',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genus:  'Astrophytum',
      country:  'USA, Mexico',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genus: 'Copiapoa',
      country: 'Chile',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genus:  'Coryphantha',
      country: 'USA, Mexico',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genus: 'Echinocactus',
      country: 'USA, Mexico',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genus: 'Ferocactus',
      country: 'USA, Mexico',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genus: 'Gymnocalycium',
      country: 'Argentina, Uruguay, Paraguay, Bolivia, Brazil',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genus: 'Lophophora',
      country: 'USA, Mexico',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genus:  'Tephrocactus',
      country:  'Argentina',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genus:  'Turbinicarpus',
      country: 'Mexico',
      createdAt: new Date(),
      updatedAt: new Date()
    }],

      {});

  },

   down: (queryInterface, Sequelize) => {
//     // /*
//     //   Add reverting commands here.
//     //   Return a promise to correctly handle asynchronicity.
//     //
//     //   Example:
//     //   return queryInterface.bulkDelete('People', null, {});
//     // */
   }
 };
