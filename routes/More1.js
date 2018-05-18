var express = require('express');
var router = express.Router();

var avgRace_dal = require('../dal/More1_dal');

router.get('/',function(req,res) {
    avgRace_dal.getinfo(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('More1/Display', {more: result[0]});
        }
    });

});

module.exports = router;