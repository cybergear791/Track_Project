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

            res.render('Event/Event_add', {record_result: result});
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

module.exports = router;