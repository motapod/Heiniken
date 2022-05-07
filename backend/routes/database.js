const Pool = require('pg').Pool
const db = require('./keys')
const express = require('express');
const router = express.Router();
const pool = new Pool(db.database);

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    //console.log(result.rows)
    console.log('Database Connected');
  })
})



module.exports = pool;