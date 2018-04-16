var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);


exports.getinfo = function(meet_id,callback) {
    var query= 'CALL meet_getinfo()';
    var queryData = [meet_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};
exports.getAll = function(callback) {
    var query = 'SELECT * FROM Meet WHERE event_id IS NOT NULL;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};
exports.insert = function(params, callback) {

    var query = 'INSERT INTO Meet (event_id,venue,meet_name) values (?,?,?)';

    var queryData = [params.event_id,params.venue, params.meet_name];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

