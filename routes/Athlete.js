var express = require('express');
var router = express.Router();
var Athlete_dal = require('../dal/Athlete_dal');
router.get('/all',function(req,res,next) {
    Athlete_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('Athlete/Athlete_view_all', {Athletes: result});
        }
    })

});

router.get('/add', function(req, res) {
    res.render('Athlete/Athlete_add');
});
router.get('/insert', function(req, res) {
    Athlete_dal.insert(req.query, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/Athlete/all');
        }
    });
});

module.exports = router;