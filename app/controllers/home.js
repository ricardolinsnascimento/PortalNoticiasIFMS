const NoticiasDAO = require('../models/NoticiasDAO');

module.exports.index = function(app, req, res){

	var connection = app.config.dbConnection();
	var noticiasModel = new NoticiasDAO(connection);
	//var noticiasModel = new app.app.models.NoticiasDAO(connection);

	noticiasModel.get5UltimasNoticias(function(error, result){
		console.log(result);
		res.render("home/index", {noticias: result});
	});
	
}