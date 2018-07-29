var con = require('../mysqldb.js');

exports.deleteVehicle = function deleteVehicle(id, callback) {
  var vehicleID = parseInt(id);
  var sql = "DELETE FROM `node_tut`.`vehicles` " +
    "WHERE `node_tut`.`vehicles`.`vehicleID`='" + vehicleID + "'";
  con.query(sql, function (err, rows) {
    var result = {};
    if (rows.affectedRows = 1) result = { 'status': 'done' };
    else result = { 'status': 'fail' };
    callback(null, result);
  });
}
