const pool = require("./pool");

async function initDB(){
  await pool.query(`
      CREATE TABLE IF NOT EXISTS messages(
        id SERIAL PRIMARY KEY,
        text VARCHAR(300) NOT NULL,
        username CHAR(20) NOT NULL,
        added TIMESTAMP DEFAULT NOW()
      )
    `);
  console.log("table created")

    const stuff = await pool.query(`
      SELECT * FROM messages
    `);
  console.log(stuff.rows)
}

module.exports = { initDB };