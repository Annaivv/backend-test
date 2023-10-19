const db = require("../db");

class DealsController {
  async getDeals(req, res) {
    console.log(req);
    try {
      const deals = await db.query("SELECT * FROM deals");
      console.log(deals.rows);
      res.json(deals.rows);
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new DealsController();
