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
router.get('/Me',function(req,res){
    res.render('Athlete/Me');
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

router.get('/edit', function(req, res){
    Athlete_dal.getAthlete(req.query.ath_id, function(err, result){
        if(err){ res.send(err); }
        else {
            console.log(result[3]);
            res.render('Athlete/AthleteUpdate', {
               Athlete: result,
                ath_id: req.query.ath_id,
                was_successful:req.query.was_successful});
        }
    });
});
router.get('/update',function(req,res) {
    Athlete_dal.update(req.query, function(err,result){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302,'/Athlete/all');
        }
    });
});
router.get('/delete', function(req, res) {
    Athlete_dal.delete(req.query.ath_id, function (err, ath_id) {
        if (err) {
            res.redirect(302, '/Athlete/all?ath_id=' + ath_id + '&was_successful ='+ false);
        }
        else {
            res.redirect(302, '/Athlete/all?ath_id=' + ath_id + '&was_successful ='+ true);

        }
    });
});

module.exports = router;