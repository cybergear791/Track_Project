var express = require('express');
var router = express.Router();
var Record_dal = require('../dal/Record_dal');
var Athlete_dal = require('../dal/Athlete_dal');
router.get('/all',function(req,res,next) {
    Record_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('Record/Record_view_all', {Records: result});
        }
    })

});

router.get('/add', function(req, res) {
    Athlete_dal.getAll(function (err, result) {
        if (err)
            res.send(err);
        else
            res.render('Record/Record_add', {athlete_result: result});
    });
});
router.get('/insert', function(req, res) {
    Record_dal.insert(req.query, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/Record/all');
        }
    });
});

module.exports = router;