var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('advice.html', { root: 'public' });
});

/* GET home page. */
router.get('/getAdvice', function(req, res, next) {
    var url;
    if(req.query.type == "random") {
        url = 'http://api.adviceslip.com/advice';
    } else {
        url = 'http://api.adviceslip.com/advice/search/' + req.query.advice;
    }
      request(url,function(err, response, body) {
        if(!err) {
            res.json(body);
        } else {
            console.log(err);
        }
    })
});

module.exports = router;
