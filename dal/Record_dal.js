var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Record;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback) {

    var query = 'INSERT INTO Record (ath_id, season) values (?,?)';

    var queryData = [params.ath_id, params.season];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

