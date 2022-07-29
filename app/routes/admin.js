module.exports = function(app){

	const adminController = require('../controllers/admin');

	app.get('/formulario_inclusao_noticia', function(req,res){
		adminController.formulario_inclusao_noticia(app,req,res);
	});

	app.post('/noticias/salvar', function(req,res){
		adminController.noticias_salvar(app,req,res);
	});

	app.post('/atualizar', function(req,res){
		adminController.noticias_atualizar(app,req,res);
	});	
}