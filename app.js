var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

// const mysql = require('mysql2');
// const db = require('./dbconnect/dbconn');





var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var incomeRouter = require('./routes/income');

var app = express();

// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'dd_db'
// })
// db.connect((err)=>{
//     if(err) {
//         throw err;
//     }
//     console.log('Connected to DB');
// })
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/income', incomeRouter);

module.exports = app;


