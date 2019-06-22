var exports = module.exports = {}
var path = require("path");
var express = require('express');
var app = express();
app.use(express.static('public'));

// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // DB is local on localhost
    connection = mysql.createConnection({
        port: 8889,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'exampledb'
    })
};

// Make the connection to MySQL
connection.connect(function(err) {
 if (err) {
   console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
   return;
 }
 console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

exports.signup = function (req, res) {

  res.render('signup');

}

exports.signin = function (req, res) {

  res.render('signin');

}

exports.dashboard = function (req, res) {

  // res.render('dashboard');
  // console.log(__dirname);
  // res.sendFile(path.join(__dirname,"..","/public/views/dashboard.html"));
  // res.sendFile(path.join(__dirname,"..","/public/css/style.css"));
  res.render("index", {
    msg: "YUMMY RECIPES",
    img: "public/images/recipe.png"
  });
}

exports.logout = function (req, res) {

  req.session.destroy(function (err) {
    res.redirect('/');
  });

}