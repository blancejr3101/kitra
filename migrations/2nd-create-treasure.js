module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('treasures', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        latitude: {
          type: Sequelize.DOUBLE
        },
        longitude: {
          type: Sequelize.DOUBLE
        },
        name: {
          type: Sequelize.STRING
        }
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('treasures');
    }
  };