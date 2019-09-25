
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock',
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'TEST',
  multipleStatements: true
});

mysqlConnection.connect((err) => {
  if(err){
    console.log("failed connected", err);
  } else {
    console.log("connected");
  }
}); 

export default mysqlConnection;