var express    = require('express');
var bodyParser = require('body-parser');

var app = express();
var db  = require('./mysqldb');

/*var cUser  = require('./user/create_user.js');
var saUser = require('./user/show_all_users.js');
var sUser  = require('./user/show_user.js');
var uUser  = require('./user/update_user.js');
var dUser  = require('./user/delete_user.js');

var cDevice  = require('./device/create_device.js');
var saDevice = require('./device/show_all_devices.js');
var sDevice  = require('./device/show_device.js');
var uDevice  = require('./device/update_device.js');
var dDevice  = require('./device/delete_device.js');*/

app.use(function(req, res, next) {
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
/*app.post('/create_user', function(req, res) {
  console.log("create_user");
  var username = req.body.username;
  var email = req.body.email;
  cUser.createUser(username, email, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// SHOW ALL USERS
app.get('/show_all_users', function(req, res) {
  console.log("show_all_users");
  saUser.showAllUsers(function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// SHOW USER
app.post('/show_user', function(req, res) {
  console.log("show_user");
  var id = req.body.id;
  sUser.showUser(id, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// UPDATE USER
app.post('/update_user', function(req, res) {
  console.log("update_user");
  var id = req.body.id;
  var username = req.body.username;
  var email = req.body.email;
  uUser.updateUser(id, username, email, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// DELETE USER
app.post('/delete_user', function(req, res) {
  console.log("delete_user");
  var id = req.body.id;
  dUser.deleteUser(id, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// ------------------------ USER ----------------------------------------------


// ---------------------- DEVICE ----------------------------------------------

// CREATE A DEVICE
app.post('/create_device', function(req, res) {
  console.log("create_device");
  var userid = req.body.userid;
  var devicename = req.body.devicename;
  cDevice.createDevice(userid, devicename, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// SHOW ALL DEVICES
app.post('/show_all_devices', function(req, res) {
  console.log("show_all_devices");
  var id = req.body.id;
  saDevice.showAllDevices(id, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// SHOW DEVICE
app.post('/show_device', function(req, res) {
  console.log("show_device");
  var id = req.body.id;
  sDevice.showDevice(id, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// UPDATE DEVICE
app.post('/update_device', function(req, res) {
  console.log("update_device");
  var id = req.body.id;
  var devicename = req.body.devicename;
  var user_id = req.body.user_id;
  uDevice.updateDevice(id, Devicename, user_id, function(err, result) {
    console.log(result);
    res.send(result);
  });
});

// DELETE DEVICE
app.post('/delete_device', function(req, res) {
  console.log("delete_device");
  var id = req.body.id;
  dDevice.deleteDevice(id, function(err, result) {
    console.log(result);
    res.send(result);
  });
});*/

// ---------------------- DEVICE ----------------------------------------------

module.exports = app;
