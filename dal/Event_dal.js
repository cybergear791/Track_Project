var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getinfo = function(event_id,callback) {
    var query = 'CALL Events_getinfo();';
    var queryData = [event_id];

    connection.query(query,queryData, function(err, result){
        callback(err, result);
    });
};
exports.getAll = function(callback) {
    var query = 'SELECT * FROM Event';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};
exports.update = function(params,callback) {
    var query = 'UPDATE Event SET event_name = ?, time = ? WHERE event_id =?';
    var queryData = [params.event_name, params.time, params.event_id];
    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};
exports.delete = function(event_id,callback){
    var query = 'CALL deleteevent(?)';
    var queryData = [event_id];
    connection.query(query,queryData,  function(err, result) {
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

