var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var db = require('./mysqldb');

var cUser = require('./user/create_user.js');
var saUser = require('./user/show_all_users.js');
var sUser = require('./user/show_user.js');
var uUser = require('./user/update_user.js');
var dUser = require('./user/delete_user.js');

var cvehicle = require('./vehicle/create_vehicle.js');
var savehicle = require('./vehicle/show_all_vehicles.js');
var svehicle = require('./vehicle/show_vehicle.js');
var uvehicle = require('./vehicle/update_vehicle.js');
var dvehicle = require('./vehicle/delete_vehicle.js');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers',
    'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// ------------------------ USER ----------------------------------------------

// CREATE A USER

app.post('/create_user', function (req, res) {
  console.log("create_user");
  var username = req.body.username;
  var email = req.body.email;
  cUser.createUser(username, email, function (err, result) {
    console.log(result);
    res.send(result);
  });
});

app.post('/create_user', function (req, res) {
  console.log("create_user");
  var username = req.body.username;
  var email = req.body.email;
  cUser.createUser(username, email, function (err, result) {
    console.log(result);
    res.send(result);
  });
});

// SHOW ALL USERS
app.get('/show_all_users', function (req, res) {
  console.log("show_all_users");
  saUser.showAllUsers(function (err, result) {
    console.log(result);
    res.send(result);
  });
});

// SHOW USER
app.post('/show_user', function (req, res) {
  console.log("show_user");
  var id = req.body.id;
  sUser.showUser(id, function (err, result) {
    console.log(result);
    res.send(result);
  });
});

// UPDATE USER
app.post('/update_user', function (req, res) {
  console.log("update_user");
  var id = req.body.id;
  var username = req.body.username;
  var email = req.body.email;
  uUser.updateUser(id, username, email, function (err, result) {
    console.log(result);
    res.send(result);
  });
});

// DELETE USER
app.post('/delete_user', function (req, res) {
  console.log("delete_user");
  var id = req.body.id;
  dUser.deleteUser(id, function (err, result) {
    console.log(result);
    res.send(result);
  });
});

// ------------------------ USER ----------------------------------------------


// ---------------------- VEHICLE ----------------------------------------------

// CREATE A VEHICLE
app.post('/create_vehicle', function (req, res) {
  console.log("create_vehicle");
  var userid = req.body.userid;
  var vehiclename = req.body.vehiclename;
  cvehicle.createvehicle(userid, vehiclename, function (err, result) {
    console.log(result);
    res.send(result);
  });
});

// SHOW ALL VEHICLES
app.post('/show_all_vehicles', function (req, res) {
  console.log("show_all_vehicles");
  var id = req.body.id;
  savehicle.showAllvehicles(id, function (err, result) {
    console.log(result);
    res.send(result);
  });
});

// SHOW VEHICLE
app.post('/show_vehicle', function (req, res) {
  console.log("show_vehicle");
  var id = req.body.id;
  svehicle.showvehicle(id, function (err, result) {
    console.log(result);
    res.send(result);
  });
});

// UPDATE VEHICLE
app.post('/update_vehicle', function (req, res) {
  console.log("update_vehicle");
  var id = req.body.id;
  var vehiclename = req.body.vehiclename;
  var user_id = req.body.user_id;
  uvehicle.updatevehicle(id, vehiclename, user_id, function (err, result) {
    console.log(result);
    res.send(result);
  });
});

// DELETE VEHICLE
app.post('/delete_vehicle', function (req, res) {
  console.log("delete_vehicle");
  var id = req.body.id;
  dvehicle.deletevehicle(id, function (err, result) {
    console.log(result);
    res.send(result);
  });
});

// ---------------------- VEHICLE ----------------------------------------------

module.exports = app;
