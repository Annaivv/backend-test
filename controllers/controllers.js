const db = require("../db");

class DealsController {
  async getDeals(req, res) {
    const deals = await db.query("SELECT * FROM deals");
    console.log(deals.rows);
    res.json(deals.rows);
  }
}

module.exports = new DealsController();
