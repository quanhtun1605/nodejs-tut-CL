var con = require('../mysqldb.js');

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

exports.createUser = function createUser(username, email, callback) {
  var userID = randomInt(100000, 999999);
  var sql = "INSERT INTO `node_tut`.`users` (`userID`, `userName`, `email`) " +
    "VALUES ('" + userID + "', '" + username + "', '" + email + "')";
  con.query(sql, function (err, rows) {
    var result = {};
    if (rows.affectedRows = 1) result = { 'status': 'done' };
    else result = { 'status': 'fail' };
    callback(null, result);
  });
}
