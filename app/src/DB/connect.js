const sqlite3 = require('sqlite3').verbose();

const DB_PATH = '../posDb.db';

const db = new sqlite3.Database(DB_PATH, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});


module.exports = db;
