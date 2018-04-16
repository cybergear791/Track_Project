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

module.exports = router;