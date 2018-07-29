var con = require('../mysqldb.js');

function serverAnswerShowAllVehicle(Rows) {
  var result = [];
  for (var i = 0; i < Rows.length; i++) {
    result.push({
      vehicleID: Rows[i].vehicleID,
      vehicleName: Rows[i].vehicleName
    })
  }
  return result;
}

exports.showAllVehicles = function showAllVehicles(id, callback) {
  var userID = parseInt(id);
  var sql = "SELECT `node_tut`.`vehicles`.`vehicleID`, `node_tut`.`vehicles`.`vehicleName` " +
    "FROM `node_tut`.`users` " +
    "INNER JOIN `node_tut`.`vehicles` " +
    "ON `node_tut`.`users`.`userID` = `node_tut`.`vehicles`.`userID`" +
    "WHERE `node_tut`.`users`.`userID` = '" + userID + "'";
  con.query(sql, function (err, rows) {
    callback(null, JSON.stringify(serverAnswerShowAllVehicle(rows)));
  });
}
