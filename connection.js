// import mysql from 'mysql';
// Fix later
// https://codeburst.io/node-js-mysql-and-promises-4c3be599909b
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  // socketPath needs for MAMP, if u do not use it, just comment out
  // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  host: 'us-cdbr-iron-east-04.cleardb.net',
  user: 'b10678b3bdcb6b',
  // make sure ur password is correct
  password: '16773c45',
  database: 'heroku_f329b333647dd97',
  multipleStatements: true
});

mysqlConnection.connect(err => {
  if (err) {
    console.log('failed connected', err);
  } else {
    console.log('connected');
  }
});

module.exports = mysqlConnection;
