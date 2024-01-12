var express = require('express');
const db = require('../dbconnect/dbconn');
const dataController = require('../controller/incomeController');
// const mysql = require('mysql2');
// const db = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'',
//   database:'dd_db'
// })
// db.connect((err)=>{
//   if(err) {
//       throw err;
//   }
//   console.log('Connected to DB');
// })



var router = express.Router();

/* GET home page. */
router.get('/', dataController.index);
router.post('/', dataController.insertData);
router.delete('/:id', dataController.delete);



module.exports = router;