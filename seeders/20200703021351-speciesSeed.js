'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert('Species', [{
      species: 'retusus',
      GenusId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'fissuratus',
      GenusId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'kotschoubeyanus',
      GenusId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'bravoanus',
      GenusId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'scapharostris',
      GenusId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'trigonus',
      GenusId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'asterias',
      GenusId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'capricorne',
      GenusId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'myriostigma',
      GenusId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'ornatum',
      GenusId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'cinera',
      GenusId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'hypogea',
      GenusId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'tenuissima',
      GenusId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'humilis',
      GenusId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'haseltoniana',
      GenusId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'pallida',
      GenusId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'elephantidens',
      GenusId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'kracikii',
      GenusId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'grusonii',
      GenusId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'horizonthalonius',
      GenusId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'platyacanthus',
      GenusId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'paryi',
      GenusId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'wislizeni',
      GenusId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'chrysacanthus',
      GenusId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'emoryi',
      GenusId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'ferrarii',
      GenusId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'guehlianum',
      GenusId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'mihanovichii',
      GenusId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'fricii',
      GenusId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'difussa',
      GenusId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'williamsii',
      GenusId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'alexanderii',
      GenusId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'aoracanthus',
      GenusId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'platyacanthus',
      GenusId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'alonsoi',
      GenusId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'krainzianus',
      GenusId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      species: 'jauernigii',
      GenusId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
