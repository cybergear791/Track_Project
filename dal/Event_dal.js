var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Event;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback) {

    var query = 'INSERT INTO Event (event_name,time, record_id) values (?,?,?)';

    var queryData = [params.event_name, params.time, params.record_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

