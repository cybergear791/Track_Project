var express = require('express');
var router = express.Router();

var Athlete_dal = require('../dal/Athlete_dal');

router.get('/',function(req,res,next) {
    Athlete_dal.getAll(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('View/DisplayAth', {Views: result});
        }
    });

});

module.exports = router;