var express = require('express');
var router = express.Router();
var Event_dal = require('../dal/Event_dal');
var Record_dal = require('../dal/Record_dal');

router.get('/all',function(req,res) {
    Event_dal.getinfo(req.query.event_id,function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.render('Event/Event_view_all', {Events: result[0], record:result[1]});
        }
    })

});

router.get('/add', function(req, res) {
    Record_dal.getAll(function (err, result) {
        if (err)
            res.send(err);
        else

            res.render('Event/Event_add', {record_result: result, athlete:result[0]});
    });
});
router.get('/insert', function(req, res) {
    Event_dal.insert(req.query, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/Event/all');
        }
    });
});

router.get('/delete', function(req, res) {
    Event_dal.delete(req.query.event_id, function (err, event_id) {
        if (err) {
            res.redirect(302, '/Event/all?event_id=' + event_id + '&was_successful ='+ false);
        }
        else {
            res.redirect(302, '/Event/all?event_id=' + event_id + '&was_successful ='+ true);
        }
    });
});
router.get('/edit', function(req, res){
    Event_dal.getinfo(req.query.event_id, function(err, result){
        if(err){ res.send(err); }
        else {
            res.render('Event/EventUpdate', {
                Events: result[0],
                record_result:result[1],
                event_id: req.query.event_id,
                was_successful:req.query.was_successful});
        }
    });
});
router.get('/update',function(req,res) {
    Event_dal.update(req.query, function(err,result){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302,'/Event/all');
        }
    });
});
module.exports = router;