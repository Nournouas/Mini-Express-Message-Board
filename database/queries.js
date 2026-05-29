const pool = require("./pool");

const SQL = {
  getAll: `SELECT * FROM messages`,
}

async function getAll(){
  const stuff = await pool.query(SQL.getAll);
  return stuff.rows;
}

async function insertMessage(text, user){
  const sqlQuery = `INSERT INTO messages (text, username)
    VALUES ('${text}', '${user}')
  `
  await pool.query(sqlQuery)
}

module.exports = {
  getAll,
  insertMessage,
}