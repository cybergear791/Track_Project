var express = require('express');
var router = express.Router();

var View_dal = require('../dal/NeedMeet_dal');

router.get('/',function(req,res) {
    View_dal.getinfo(function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.render('NeedMeet/Display', {result: result[0]});
        }
    });

});

module.exports = router;