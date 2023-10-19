const Pool = require("pg").Pool;

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, SSL_FLAG } =
  process.env;

const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  ssl: SSL_FLAG,
});

module.exports = pool;
