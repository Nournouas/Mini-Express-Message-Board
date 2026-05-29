const { Pool } = require("pg")

module.exports = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false  // required for Render's self-signed cert
  }
});
