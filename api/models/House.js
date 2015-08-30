/**
* House.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'MySQL',
  attributes: {
    address: 'string',
    type: 'string',
    price: 'integer',
    properties: 'string',
    publishFrom: 'integer',
    thumbnail: {
      model: 'photo'
    },
    location: {
      model: 'location'
    },
    photos: {
      collection: 'photo',
      via: 'house'
    },
    description: 'text',
    contactAgents: {
      collection: 'agent',
      via: 'house'
    }
  }
};

