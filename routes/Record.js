var express = require('express');
var router = express.Router();
var Record_dal = require('../dal/Record_dal');
var Athlete_dal = require('../dal/Athlete_dal');

router.get('/all',function(req,res) {
    Record_dal.getinfo(req.query.record_id,function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.render('Record/Record_view_all', {Records: result[0],athlete:result[1]});
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

router.get('/delete', function(req, res) {
    Record_dal.delete(req.query.record_id, function (err, record_id) {
        if (err) {
            res.redirect(302, '/Record/all?record_id=' + record_id + '&was_successful ='+ false);
        }
        else {
            res.redirect(302, '/Record/all?record_id=' + record_id + '&was_successful ='+ true);
        }
    });
});

router.get('/edit', function(req, res){
    Record_dal.getinfo(req.query.record_id, function(err, result){
        if(err){ res.send(err); }
        else {
            res.render('Record/RecordUpdate', {
                record_id: req.query.record_id,
                Records: result[0],
                athlete_result:result[1],
                was_successful:req.query.was_successful});
        }
    });
});
router.get('/update',function(req,res) {
    Record_dal.update(req.query, function(err,result){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302,'/Record/all');
        }
    });
});
module.exports = router;