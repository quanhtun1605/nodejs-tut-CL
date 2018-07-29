var con = require('../mysqldb.js');

exports.updateUser = function updateUser(id, username, email, callback) {
  var userID = parseInt(id);
  var sql = "UPDATE `node_tut`.`users` " +
    "SET `userName`='" + username + "', `email`='" + email + "' " +
    "WHERE `userID`='" + id + "'";
  con.query(sql, function (err, rows) {
    var result = {};
    if (rows.affectedRows = 1) result = { 'status': 'done' };
    else result = { 'status': 'fail' };
    callback(null, result);
  });
}
