var con = require('../mysqldb.js');

function serverAnswerShowVehiclesUser(Id, Vehiclename, User_id) {
  return {
    vehicleID: Id,
    vehicleName: Vehiclename,
    userID: User_id
  };
}

exports.showVehiclesUser = function showVehiclesUser(id, callback) {
  var vehicleID = parseInt(id);
  var sql = "SELECT * FROM `node_tut`.`vehicles` " +
    "WHERE `node_tut`.`vehicles`.`vehicleID` = '" + vehicleID + "'";
  con.query(sql, function (err, rows) {
    callback(null, JSON.stringify(serverAnswerShowVehiclesUser(
      rows[0].vehicleID,
      rows[0].vehicleName,
      rows[0].userID
    )));
  });
}
