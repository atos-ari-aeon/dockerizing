
var express = require('express');
var router = express.Router();
var fare_manager = require('../manager/fare_manager');

router.use(function timeLog(req, res, next) {
  
  //Somenthing to be done here each time that a request comes
  console.log('Time: ', Date.now());
  next();
})

router.get('/',function(req,res){
	res.send(req.originalUrl);
})

router.get('/fare', function(req, res){
	console.log(req.query)
	if(!req.query.ori || !req.query.dest)
		res.send("Error in the number of parameters");
	else{
		fare_manager.getFares(req.query);
		res.send(req.originalUrl);
	}
})

module.exports = router;