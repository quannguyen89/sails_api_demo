/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

var _ = require('lazy.js');
module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  console.log('Destroy all before creating seed data');
  House.destroy().exec(console.log);
  Photo.destroy().exec(console.log);
  Agent.destroy().exec(console.log);
  Location.destroy().exec(console.log);

  var housesData = [
    {
      address: '589 Coleridge Ave, Hanoi, Vietnam',
      type: 'House for sale',
      price: 8950000,
      properties: '3 bds, 3.5 ba, 4464 sqft, 0.28 ac lot, Built 1997',
      publishFrom: 104,
      thumbnail: 'http://photos2.zillowstatic.com/p_g/ISpxm1nzj9y1xo1000000000.jpg',
      location: [21.009326, 105.857682],
      description: 'Custom designed home on a large lot in the Old Palo Alto neighborhood. Vaulted ceilings and large windows fill the home with natural light. Clean lines and craftsman details create a bond between the shingle-style neighborhood and contemporary style. Three level home, with basement. Possibility to create a fourth bedroom on either the ground floor or at the basement level.',
    },
    {
      address: '1565 Webster St,  Hanoi, Vietnam',
      type: 'House for sale',
      price: 6950000,
      properties: '3 bds, 3.5 ba, 4464 sqft, 0.28 ac lot, Built 1997',
      publishFrom: 200,
      thumbnail: 'http://photos3.zillowstatic.com/p_g/ISxzt2p00tw62m1000000000.jpg',
      location: [21.009356, 105.855442],
      description: 'Custom designed home on a large lot in the Old Palo Alto neighborhood. Vaulted ceilings and large windows fill the home with natural light. Clean lines and craftsman details create a bond between the shingle-style neighborhood and contemporary style. Three level home, with basement. Possibility to create a fourth bedroom on either the ground floor or at the basement level.',

    },
    {
      address: '1061 Alma Street, Hanoi, Vietnam',
      type: 'Make me move',
      price: 5500000,
      properties: '3 bds, 3.5 ba, 4464 sqft, 0.28 ac lot, Built 1997',
      publishFrom: 222,
      thumbnail: 'http://photos3.zillowstatic.com/p_g/IS5mozylseymxd1000000000.jpg',
      location: [21.011072, 105.842455],
      description: 'Custom designed home on a large lot in the Old Palo Alto neighborhood. Vaulted ceilings and large windows fill the home with natural light. Clean lines and craftsman details create a bond between the shingle-style neighborhood and contemporary style. Three level home, with basement. Possibility to create a fourth bedroom on either the ground floor or at the basement level.',

    },
    {
      address: '589 Coleridge Ave, Hanoi, Vietnam',
      type: 'House for sale',
      price: 8950000,
      properties: '3 bds, 3.5 ba, 4464 sqft, 0.28 ac lot, Built 1997',
      publishFrom: 104,
      thumbnail: 'http://photos2.zillowstatic.com/p_g/ISpxm1nzj9y1xo1000000000.jpg',
      location: [21.027816, 105.852268],
      description: 'Custom designed home on a large lot in the Old Palo Alto neighborhood. Vaulted ceilings and large windows fill the home with natural light. Clean lines and craftsman details create a bond between the shingle-style neighborhood and contemporary style. Three level home, with basement. Possibility to create a fourth bedroom on either the ground floor or at the basement level.',

    },
    {
      address: '589 Coleridge Ave, Hanoi, Vietnam',
      type: 'House for sale',
      price: 8950000,
      properties: '3 bds, 3.5 ba, 4464 sqft, 0.28 ac lot, Built 1997',
      publishFrom: 104,
      thumbnail: 'http://photos3.zillowstatic.com/p_g/ISxzt2p00tw62m1000000000.jpg',
      description: 'Custom designed home on a large lot in the Old Palo Alto neighborhood. Vaulted ceilings and large windows fill the home with natural light. Clean lines and craftsman details create a bond between the shingle-style neighborhood and contemporary style. Three level home, with basement. Possibility to create a fourth bedroom on either the ground floor or at the basement level.',
      location: [21.054544, 105.820344]
    },
    {
      address: '589 Coleridge Ave, Hanoi, Vietnam',
      type: 'House for sale',
      price: 8950000,
      properties: '3 bds, 3.5 ba, 4464 sqft, 0.28 ac lot, Built 1997',
      publishFrom: 104,
      thumbnail: 'http://photos3.zillowstatic.com/p_g/IS5mozylseymxd1000000000.jpg',
      location: [21.042675, 105.791481],
      description: 'Custom designed home on a large lot in the Old Palo Alto neighborhood. Vaulted ceilings and large windows fill the home with natural light. Clean lines and craftsman details create a bond between the shingle-style neighborhood and contemporary style. Three level home, with basement. Possibility to create a fourth bedroom on either the ground floor or at the basement level.',
    },
    {
      address: '589 Coleridge Ave, Hanoi, Vietnam',
      type: 'House for sale',
      price: 8950000,
      properties: '3 bds, 3.5 ba, 4464 sqft, 0.28 ac lot, Built 1997',
      publishFrom: 104,
      thumbnail: 'http://photos2.zillowstatic.com/p_g/ISpxm1nzj9y1xo1000000000.jpg',
      location: [21.028501, 105.782255],
      description: 'Custom designed home on a large lot in the Old Palo Alto neighborhood. Vaulted ceilings and large windows fill the home with natural light. Clean lines and craftsman details create a bond between the shingle-style neighborhood and contemporary style. Three level home, with basement. Possibility to create a fourth bedroom on either the ground floor or at the basement level.',
    },
    {
      address: '589 Coleridge Ave, Hanoi, Vietnam',
      type: 'House for sale',
      price: 8950000,
      properties: '3 bds, 3.5 ba, 4464 sqft, 0.28 ac lot, Built 1997',
      publishFrom: 104,
      thumbnail: 'http://photos3.zillowstatic.com/p_g/IS5mozylseymxd1000000000.jpg',
      description: 'Custom designed home on a large lot in the Old Palo Alto neighborhood. Vaulted ceilings and large windows fill the home with natural light. Clean lines and craftsman details create a bond between the shingle-style neighborhood and contemporary style. Three level home, with basement. Possibility to create a fourth bedroom on either the ground floor or at the basement level.',
      location: [21.028309, 105.790856]

    },
    {
      address: '589 Coleridge Ave, Hanoi, Vietnam',
      type: 'House for sale',
      price: 8950000,
      properties: '3 bds, 3.5 ba, 4464 sqft, 0.28 ac lot, Built 1997',
      publishFrom: 104,
      thumbnail: 'http://photos2.zillowstatic.com/p_g/ISpxm1nzj9y1xo1000000000.jpg',
      description: 'Custom designed home on a large lot in the Old Palo Alto neighborhood. Vaulted ceilings and large windows fill the home with natural light. Clean lines and craftsman details create a bond between the shingle-style neighborhood and contemporary style. Three level home, with basement. Possibility to create a fourth bedroom on either the ground floor or at the basement level.',
      location: [21.027705, 105.811117]
    },
    {
      address: '589 Coleridge Ave, Hanoi, Vietnam',
      type: 'House for sale',
      price: 8950000,
      properties: '3 bds, 3.5 ba, 4464 sqft, 0.28 ac lot, Built 1997',
      publishFrom: 104,
      thumbnail: 'http://photos3.zillowstatic.com/p_g/ISxzt2p00tw62m1000000000.jpg',
      description: 'Custom designed home on a large lot in the Old Palo Alto neighborhood. Vaulted ceilings and large windows fill the home with natural light. Clean lines and craftsman details create a bond between the shingle-style neighborhood and contemporary style. Three level home, with basement. Possibility to create a fourth bedroom on either the ground floor or at the basement level.',
      location: [21.019992, 105.814706]
    }
    ];

  var houseDetail = {
    photos: [
      'http://photos1.zillowstatic.com/p_h/IS9tsmiolp6hev1000000000.jpg',
      'http://photos2.zillowstatic.com/p_h/IS1nqa0ihhyjev1000000000.jpg',
      'http://photos3.zillowstatic.com/p_h/IStgoyhbd9qmev1000000000.jpg',
      'http://photos1.zillowstatic.com/p_h/ISlammz491ipev1000000000.jpg',
      'http://photos1.zillowstatic.com/p_h/IS9hr1kevjvkkl0000000000.jpg',
      'http://photos1.zillowstatic.com/p_h/IS1rxujhu5v30o1000000000.jpg',
      'http://photos1.zillowstatic.com/p_h/ISp1utk34801pv1000000000.jpg',
      'http://photos3.zillowstatic.com/p_h/IShvvoa7kf49w70000000000.jpg',
      'http://photos2.zillowstatic.com/p_h/ISphqpbkrfi2oe0000000000.jpg',
      'http://photos2.zillowstatic.com/p_h/IShzafgq64f3ka0000000000.jpg',
      'http://photos3.zillowstatic.com/p_h/IS9t83yj2w66ka0000000000.jpg',
      'http://photos3.zillowstatic.com/p_h/ISx7sev6epwv2j0000000000.jpg',
      'http://photos2.zillowstatic.com/p_h/ISp5xaj1u5nbev1000000000.jpg'
    ],
    contactAgents: [
      {
        name: 'Michael Dreyfus',
        phone: '(650) 644-3474',
        averageRating: 4.7,
        numRates: 32,
        avatar: 'http://photos1.zillowstatic.com/h_n/ISptj0herzprn40000000000.jpg',
        recentSales: 44
      },
      {
        name: 'Katy Thielke Straser',
        phone: '(650) 941-8003',
        averageRating: 4.9,
        numRates: 24,
        avatar: 'http://photos2.zillowstatic.com/h_n/IS-1h1vglrnwo5el.jpg',
        recentSales: 33
      },
      {
        name: 'Karishma & Deepak Chandani',
        phone: '(650) 941-8003',
        averageRating: 4.6,
        numRates: 31,
        avatar: 'http://photos1.zillowstatic.com/h_n/IS1fw1nb6twj6i1000000000.jpg',
        recentSales: 49
      }
    ]

  };


  var id = 1;
  housesData.forEach(function(house) {
    var houseData = _(house).omit(['thumbnail', 'location']).toObject();
    houseData.id = id;
    houseData.location = id;
    houseData.thumbnail = id;
    House.create(houseData).exec(console.log);
    Photo.create({
      url: house.thumbnail,
      id: id,
      smallHouse: id
    }).exec(console.log);
    Location.create({
      id: id,
      latitude: house.location[0],
      longtitude: house.location[1],
      house: id
    }).exec(console.log);
    id++;
  });

  houseDetail.photos.forEach(function(photo) {
    Photo.create({
      url: photo,
      house: 1,
      id: id++
    }).exec(console.log);
  });

  var oldId = id;
  id = 1;
  houseDetail.contactAgents.forEach(function(agent) {
    var agentData = _(agent).omit(['avatar']).toObject();
    agentData.id = id;
    agentData.avatar = id + oldId;
    agentData.house = 1;
    Agent.create(agentData).exec(console.log);
    Photo.create({
      url: agent.avatar,
      agent: id,
      id: id + oldId
    });
    id++;
  });
  cb();
};
