var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Meet;';
    var query2 = 'SELECT * FROM Event';
    connection.query(query,query2, function(err, result,result2){
        callback(err, result,result2);
    });
};

exports.insert = function(params, callback) {

    var query = 'INSERT INTO Meet (event_id,venue,meet_name) values (?,?,?)';

    var queryData = [params.event_id,params.venue, params.meet_name];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

