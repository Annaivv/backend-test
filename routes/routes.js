const Router = require("express");
const router = new Router();
const dealsController = require("../controllers/controllers");

router.get("/deal", dealsController.getDeals);

module.exports = router;
