var con = require('../mysqldb.js');

exports.deleteUser = function deleteUser(id, callback) {
  var userID = parseInt(id);
  var sql = "DELETE FROM `node_tut`.`users` " +
    "WHERE `node_tut`.`users`.`userID`='" + userID + "'";
  con.query(sql, function (err, rows) {
    var result = {};
    if (rows.affectedRows = 1) result = { 'status': 'done' };
    else result = { 'status': 'fail' };
    callback(null, result);
  });
}
