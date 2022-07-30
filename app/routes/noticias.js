
module.exports = function(app){

	const noticiasController = require('../controllers/noticias');

	app.get('/noticias',function(req,res){
		noticiasController.noticias(app, req, res);
	});

	app.get('/apinoticias',function(req,res){
		noticiasController.apinoticias(app, req, res);
	});

	app.get('/noticia',function(req,res){
		noticiasController.noticia(app, req, res);
	});

	app.post('/busca', function(req,res){
		noticiasController.busca(app, req, res);

	});

	app.get('/excluir', function(req,res){
		noticiasController.excluir(app, req, res);
	});

	  app.get('/editar', function(req,res){
		noticiasController.editar(app, req, res);
	});


}

