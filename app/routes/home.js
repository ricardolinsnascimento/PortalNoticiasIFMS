module.exports = function(app){
	const homeController = require('../controllers/home');

	app.get('/',function(req,res){
		homeController.index(app, req, res);
	});


/*
	app.get('/',function(req,res){
		app.app.controllers.home.index(app, req, res);
	});
*/
}