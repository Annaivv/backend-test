const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "volpa",
  host: "localhost",
  port: 5432,
  database: "postgres",
  //   ssl: true,
});

module.exports = pool;
