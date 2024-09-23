const sqlUtilities = require('../utilities/sql-utilities');
const { getDistance } = require('geolib');



const findTreasureBoxes = async (req) => {
  const { latitude, longitude, distance } = req;
  //SQL  query to find all treasure boxes within a certain distance from a given location
  const query = `
    SELECT * FROM treasures
    WHERE
      (latitude BETWEEN ? AND ?) AND
      (longitude BETWEEN ? AND ?)
  `;

  const params = [
    latitude - distance,
    latitude + distance,
    longitude - distance,
    longitude + distance
  ];
  const allTreasuresResult = await sqlUtilities.globalSqlQuery(query, params);
  let treasuresFound = [];
  allTreasuresResult.forEach((treasure) => {
    const range = getDistance(
      { latitude: latitude, longitude: longitude },
      { latitude: treasure.latitude, longitude: treasure.longitude },
    );

    if ((range / 1000) <= distance) {
      treasure.km = '';
      treasure.km = (range / 1000);
      treasuresFound.push(treasure);
    }
  });

  return treasuresFound;
};


const findTreasureBoxesWithPrize = async (req) => {
  const { latitude, longitude, distance, amt } = req;
  // SQL Query database
  const query = `SELECT t.*, mv.amt FROM treasures t 
                JOIN money_values mv 
                ON t.id = mv.treasure_id 
                WHERE t.latitude BETWEEN ? AND ? 
                AND t.longitude BETWEEN ? AND ? 
                AND mv.amt >= ?;`;
  const params = [
    latitude - distance,
    latitude + distance,
    longitude - distance,
    longitude + distance,
    amt ? amt : 10
  ];
  const results = await sqlUtilities.globalSqlQuery(query, params);
  let treasuresFound = [];
  results.forEach((treasure) => {
    const range = getDistance(
      { latitude: latitude, longitude: longitude },
      { latitude: treasure.latitude, longitude: treasure.longitude },
    );

    if ((range / 1000) <= distance) {
      treasure.km = '';
      treasure.km = (range / 1000);
      treasuresFound.push(treasure);
    }
  });
  return treasuresFound;
};





module.exports = { findTreasureBoxes, findTreasureBoxesWithPrize };



