/**
 * Photo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  connection: 'MySQL',

  attributes: {
    url: 'string',
    house: {
      model: 'house'
    },
    smallHouse: {
      model: 'house'
    },
    agent: {
      model: 'agent'
    }
  }
};

