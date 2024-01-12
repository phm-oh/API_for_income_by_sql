const mysql = require('mysql2');
const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'dd_db'
})
db.connect((err)=>{
  if(err) {
      throw err;
  }
  console.log('Connected to DB');
  console.log('http://127.0.0.1:3000');
})

module.exports = db;