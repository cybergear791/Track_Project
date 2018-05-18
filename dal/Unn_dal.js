var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getinfo = function(callback) {
    var query = 'CALL Unn()';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};