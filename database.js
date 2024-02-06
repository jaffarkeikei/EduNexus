const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create a new database instance
let db = new sqlite3.Database(path.join(__dirname, 'edunexus.db'), (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create a Users table
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
)`, (err) => {
  if (err) {
    console.error('Error creating table', err.message);
  } else {
    console.log('Table created or already exists.');
  }
});

// Insert a new user
function insertUser(name, email) {
    const sql = `INSERT INTO users (name, email) VALUES (?, ?)`;
    db.run(sql, [name, email], (err) => {
      if (err) {
        console.error('Error inserting data', err.message);
      } else {
        console.log('A new user has been added.');
      }
    });
  }

// Fetch all users
function getUsers() {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM users`;
      db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }