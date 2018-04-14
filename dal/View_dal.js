var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.DisplayAthletes = function(callback) {
    var query = DisplayAthletes();

    connection.query(query, function(err, result){
        callback(err, result);
    });
};