/**
 * Agent.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  connection: 'MySQL',

  attributes: {
    name: 'string',
    phone: 'string',
    averageRating: 'float',
    numRates: 'integer',
    recentSales: 'integer',
    avatar: {
      model: 'photo'
    },
    house: {
      model: 'house'
    }
  }
};

