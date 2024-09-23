module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('money_values', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        treasure_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'treasures',
            key: 'id'
          }
        },
        amt: {
          type: Sequelize.INTEGER
        }
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('money_values');
    }
  };