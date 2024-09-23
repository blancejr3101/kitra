const connection = require('../config/database');


const globalSqlQuery = (query, params) => {
 try {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
 } catch (error) {
    console.log(error);
    throw error;
 }
}

module.exports = { globalSqlQuery }
