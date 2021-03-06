'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Landmarks',
      [
        {
          id: "dasman-centre",
          name: "Dasman Centre",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "GUD",
          lat: '26.2268109',
          lng: '50.5859564',
          image_url: 'https://res.cloudinary.com/higid3pm1/video/upload/v1519795242/landmarks/dasman-centre.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/dasman-centre-calligraphy.png'
        },
        {
          id: "gudaibiya-mosque",
          name: "Gudaibiya Mosque",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "GUD",
          lat: '26.2240711',
          lng: '50.5859882',
          image_url: 'https://res.cloudinary.com/higid3pm1/video/upload/v1519795351/landmarks/gudaibiya-mosque.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/gudaibiya-mosque-calligraphy.png'
        },
        {
          id: "american-alley",
          name: "American Alley",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "SHA",
          lat: '26.2116517',
          lng: '50.6062597',
          image_url: 'https://res.cloudinary.com/higid3pm1/video/upload/v1519795247/landmarks/american-alley.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/american-alley-calligraphy.png'
        },
        {
          id: "tree-of-life",
          name: "Tree of Life",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "JEB",
          lat: '25.9941341',
          lng: '50.580816',
          image_url: 'https://res.cloudinary.com/higid3pm1/video/upload/v1519795245/landmarks/tree-of-life.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/tree-of-life-calligraphy.png'
        },
        {
          id: "bahrain-international-circuit",
          name: "Bahrain International Circuit",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "SAK",
          lat: '26.0316048',
          lng: '50.5107113',
          image_url: "http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/bahrain-international-circuit.mp4",
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/bahrain-international-circuit-calligraphy.png'
        },
        {
          id: 'funland',
          name: "Funland",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "MAN",
          lat: '26.2342963',
          lng: '50.5970956',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/funland.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/funland-calligraphy.png'
        },
        {
          id: 'bahrain-national-museum',
          name: "Bahrain National Museum",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "MAN",
          lat: '26.241485',
          lng: '50.5957062',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/bahrain-national-museum.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/bahrain-national-museum-calligraphy.png'
        },
        {
          id: 'king-fahad-causeway',
          name: "King Fahad Causeway",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "JAS",
          lat: '26.1723882',
          lng: '50.4558303',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/king-fahad-causeway.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/king-fahad-causeway-calligraphy.png'
        },
        {
          id: 'philippine-school-bahrain',
          name: "Philippine School Bahrain",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "ALI",
          lat: '26.1552951',
          lng: '50.5239343',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/philippine-school-bahrain.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/philippine-school-bahrain-calligraphy.png'
        },
        {
          id: 'shaikh-isa-causeway',
          name: "Shaikh Isa Causeway",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "MUH",
          lat: '26.2534484',
          lng: '50.5911795',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/shaikh-isa-causeway.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/shaikh-isa-causeway-calligraphy.png'
        },
        {
          id: 'adhari-park',
          name: "Adhari Park",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "TUB",
          lat: '26.1985329',
          lng: '50.5430745',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/adhari-park.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/adhari-park-calligraphy.png'
        },
        {
          id: 'andalus-garden',
          name: "Andalus Garden",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "MAN",
          lat: '26.2223106',
          lng: '50.5832252',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/andalus-garden.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/andalus-garden-calligraphy.png'
        },
        {
          id: 'city-centre-bahrain',
          name: "City Centre Bahrain",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "MAN",
          lat: '26.2334356',
          lng: '50.5516164',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/city-centre-bahrain.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/city-centre-bahrain-calligraphy.png'
        },
        {
          id: 'lost-paradise-of-dilmun',
          name: "Lost Paradise of Dilmun",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "SAK",
          lat: '26.0134218',
          lng: '50.5081713',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/lost-paradise-of-dilmun.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/lost-paradise-of-dilmun-calligraphy.png'
        },
        {
          id: 'sacred-heart-church',
          name: "Sacred Heart Church",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "MAN",
          lat: '26.2270621',
          lng: '50.5770884',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/sacred-heart-church.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/sacred-heart-church-calligraphy.png'
        },
        {
          id: 'sacred-heart-school',
          name: "Sacred Heart School",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "ISA",
          lat: '26.2278663',
          lng: '50.5777208',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/sacred-heart-school.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/sacred-heart-school-calligraphy.png'
        },
        {
          id: 'al-areen-park',
          name: "Al Areen Park",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "ZAL",
          lat: '26.0150286',
          lng: '50.4920527',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/al-areen-park.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/al-areen-park-calligraphy.png'
        },
        {
          id: 'juffair',
          name: "Juffair",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "JUF",
          lat: '26.2128222',
          lng: '50.5990161',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/juffair.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/juffair-calligraphy.png'
        },
        {
          id: 'happy-town',
          name: "Happy Town",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "GUD",
          lat: '26.2268332',
          lng: '50.5867041',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/happy-town.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/happy-town-calligraphy.png'
        },
        {
          id: 'seef-mall',
          name: "Seef Mall",
          createdAt: new Date(),
          updatedAt: new Date(),
          cityId: "SEE",
          lat: '26.2324762',
          lng: '50.5347655',
          image_url: 'http://res.cloudinary.com/higid3pm1/video/upload/v1521004159/landmarks/seef-mall.mp4',
          name_url: 'http://res.cloudinary.com/higid3pm1/image/upload/v1521005525/calligraphy/seef-mall-calligraphy.png'
        },
      ],
    {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Landmarks', null, {});
  }
};
