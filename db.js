const Pool = require("pg").Pool;

const pool = new Pool({
  user: "admin",
  password: "njNBoERipZg0FeP4I5NMuysAUiALoOxs",
  host: "dpg-cknfa6vkc2qc738m40tg-a.frankfurt-postgres.render.com",
  port: 5432,
  database: "deals_kulu",
  ssl: true,
});

module.exports = pool;
