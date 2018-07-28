var con = require('../mysqldb.js');

exports.updateVehicle = function updateVehicle(id, vehiclename, user_id, callback) {
  var vehicleID = parseInt(id);
  var sql = "UPDATE `node_tut`.`vehicles` " +
    "SET `vehicleName`='" + vehiclename + "', `userID`='" + user_id + "' " +
    "WHERE `vehicleID`='" + id + "'";
  con.query(sql, function (err, rows) {
    var result = {};
    if (rows.affectedRows = 1) result = { 'status': 'done' };
    else result = { 'status': 'fail' };
    callback(null, result);
  });
}