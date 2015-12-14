var operators = require('./operatorFares');

exports.route = function route(app){

	app.use('/operators', operators);

};
