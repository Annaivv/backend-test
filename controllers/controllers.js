const db = require("../db");

class DealsController {
  async getDeals(req, res) {
    try {
      const deals = await db.query("SELECT * FROM deals");
      res.json(deals.rows);
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new DealsController();
