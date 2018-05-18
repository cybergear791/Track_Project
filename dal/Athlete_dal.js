var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Athlete;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};
exports.getAthlete = function(ath_id, callback) {
    var query = 'Select * from Athlete';
    var queryData = [ath_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};
exports.insert = function(params, callback) {

    var query = 'INSERT INTO Athlete (f_name,l_name) values (?,?)';

    var queryData = [params.f_name, params.l_name];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.update = function(params,callback) {
    var query = 'UPDATE Athlete SET f_name = ?, l_name = ? WHERE ath_id =?';
    var queryData = [params.f_name, params.l_name, params.ath_id];
    connection.query(query, queryData, function (err, result) {
            callback(err, result);
    });
};
exports.delete = function(ath_id,callback){
    var query = 'CALL deleteathlete(?)';
    var queryData = [ath_id];
    connection.query(query,queryData,  function(err, result) {
        callback(err, result);
    });
};