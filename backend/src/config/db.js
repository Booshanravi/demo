const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "profiledb",
  password: "1234",
  port: 5432,
});

module.exports = pool;
