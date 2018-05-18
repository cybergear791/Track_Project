var express = require('express');
var router = express.Router();

var avgRace_dal = require('../dal/DisR_dal');

router.get('/',function(req,res) {
    avgRace_dal.getinfo(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('DisR/Display', {result: result[0]});
        }
    });

});

module.exports = router;