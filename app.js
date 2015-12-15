var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var seq =  require('./config.js');

// ---------------------------------sequelize setup----------------------------------------------


// var Sequelize = require('sequelize');

// var sequelize = new Sequelize('exp','root','',
// {
// host:'localhost',
// dialect:'mysql',
// pool:
//   {
//     max:5,
//     min:0,
//     idle:10000
//   }
// });

// var data = sequelize.define("express",{

//   id : {
//           type : Sequelize.INTEGER,
//           primaryKey : true,
//           autoIncrement : true
//        },
//   Name : Sequelize.STRING(50),
//   createdAt : Sequelize.DATE,
//   updatedAt : Sequelize.DATE
// },
// {
//   // paranoid : true,
//   freezeTableName: true
// }
// );

// sequelize.sync().then(function(err){

//   if(err){
//     console.log('error has generated'+err);
//   }

//   data.create({
//     id:'',
//     Name:"can you"
//   }).then(function(testdata){
//     console.log(testdata);
//   });

// });









// ------------------------------ mysql connection----------------------------------------------







// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database:'exp'

// });
// connection.connect();
// connection.query('SELECT * FROM express',function(err,rows,fields){

// if (err) {

//   console.log("this is error"+err);
// }
// else{
//   console.log('herererer ');
//   console.log(rows[0]);
// }

// });






//------------------mysql end-------------------------------------------------------
var routes = require('./routes/index');
var users = require('./routes/users');
var test = require('./routes/test');
// var test2 = require('./routes/test2');
var register=require('./routes/register');
var adminlogin = require('./routes/adminLogin');
// var login = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); //ejs

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req,res,next){
  req.seq =  seq;
  return next();
})
app.use('/', routes);
app.use('/users', users);
// app.use('/test' , test);
// app.use('/test2',test2);
app.use('/register',register)
// app.use('/login',loginprev);
app.use('/adminlogin',adminlogin);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err); 
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
app.listen(3000,function(){
  console.log('App on currently')
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
