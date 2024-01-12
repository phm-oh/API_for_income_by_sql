var express = require('express');
const mysql = require('mysql2');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  results = conn.query(
    'SELECT * FROM tbl_user'
   )
   res.json('results')
});

module.exports = router;
