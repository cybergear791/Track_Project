var express = require('express');
var router = express.Router();
var Meet_dal = require('../dal/Meet_dal');
var Event_dal = require('../dal/Event_dal');

router.get('/all',function(req,res) {
    Meet_dal.getinfo(req.query.meet_id,function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {

            res.render('Meet/Meet_view_all', {Meets: result[0], event_result:result[1]});
        }
    })

});

router.get('/add', function(req, res) {
    Event_dal.getAll(function (err, result) {
        if (err)
            res.send(err);
        else
            res.render('Meet/Meet_add', {event_result: result});
    });
});
router.get('/insert', function(req, res) {
    Meet_dal.insert(req.query, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/Meet/all');
        }
    });
});
router.get('/delete', function(req, res) {
    Meet_dal.delete(req.query.meet_id, function (err, meet_id) {
        if (err) {
            res.redirect(302, '/Meet/all?meet_id=' + meet_id + '&was_successful ='+ false);
        }
        else {
            res.redirect(302, '/Meet/all?meet_id=' + meet_id + '&was_successful ='+ true);
        }
    });
});

router.get('/edit', function(req, res){
    Meet_dal.getinfo(req.query.meet_id, function(err, result){
        if(err){ res.send(err); }
        else {
            res.render('Meet/MeetUpdate', {
                Meet: result[0],
                event_result:result[1],
                meet_id: req.query.meet_id,
                was_successful:req.query.was_successful});
        }
    });
});
router.get('/update',function(req,res) {
    Meet_dal.update(req.query, function(err,result){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302,'/Meet/all');
        }
    });
});
module.exports = router;