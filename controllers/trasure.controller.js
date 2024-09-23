const treasureService = require('../services/treasure.service');

const findTreasureBoxes = async (req, res) => {
  try {
    if (!req.body.amt) {
      const treasureBoxes = await treasureService.findTreasureBoxes(req.body);
      if (treasureBoxes) {
        res.json({
          message: "Treasure boxes found!",
          treasureBoxes
        });
      } else {
        res.json({
          message: "No treasure box found with the specified distance",
        });
      }
    } else {
      const amount = req.body.amt;
      if (amount && (amount < 10 || amount > 30 || amount % 1 !== 0)) {
        res.status(500).json({ message: 'Prize value must be between $10 and $30 and a whole number' });
      }
      const treasureBoxes = await treasureService.findTreasureBoxesWithPrize(req.body);
      if (treasureBoxes.length) {
        res.json({
          message: "Treasure boxes with prizes found!",
          treasureBoxes
        });
      } else {
        res.json({
          message: "No treasure boxes found with the specified prize value and distance",
        });
      }

    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { findTreasureBoxes };