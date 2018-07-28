var con = require('../mysqldb.js');

function serverAnswerShowUser(Id, Username, Email) {
  return {
    userID: Id,
    userName: Username,
    email: Email
  };
}

exports.showUser = function showUser(id, callback) {
  var userID = parseInt(id);
  var sql = "SELECT * FROM `node_tut`.`users` " +
    "WHERE `node_tut`.`users`.`userID` = '" + userID + "'";
  con.query(sql, function (err, rows) {
    callback(null, JSON.stringify(serverAnswerShowUser(
      rows[0].userID,
      rows[0].userName,
      rows[0].email
    )));
  });
}
