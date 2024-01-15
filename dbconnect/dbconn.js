const mysql = require('mysql2');
const db = mysql.createConnection({
  // host:'localhost',
  // user:'root',
  // password:'',
  // database:'income',
  host:'sql12.freesqldatabase.com',
  user:'sql12677184',
  password:'1jfFZV3wM9',
  database:'sql12677184'
})
db.connect((err)=>{
  if(err) {
      throw err;
  }
  console.log('Connected to DB');
  console.log('http://127.0.0.1:3000');
})

module.exports = db;