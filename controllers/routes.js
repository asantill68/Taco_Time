var express = require('express');
var router = express.Router();
var taco = require('../models/taco.js');

//  Basic route
router.get('/', function(req, res){
    taco.all(function(taco_data){
        console.log(taco_data);
        res.render('index');
    })
})

module.exports = router;
