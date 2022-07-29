module.exports.formulario_inclusao_noticia = function(app, req, res){
			res.render('admin/form_add_noticia', {validacao:{}, noticia:{}});
}

module.exports.noticias_salvar = function(app, req, res){
		var noticia = req.body;
		req.assert('titulo', 'Título é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('autor','Autor é obrigatório').notEmpty();
		req.assert('data_noticia', 'Data é obrigatório').notEmpty();
		req.assert('noticia', 'Notícia é obrigatório').notEmpty();
		var erros = req.validationErrors();	
		if (erros){
			console.log(erros);
			res.render("admin/form_add_noticia",{validacao: erros, noticia: noticia});
			// faz voltar à pagina de inclusão de notícia
			return; //o return faz com que não continue o processo seguinte
		}

		var connection = app.config.dbConnection();
		var noticiasModel= new app.app.models.NoticiasDAO(connection);

		noticiasModel.salvarNoticia(noticia, function(error, result){
			res.redirect('/noticias');
		});
}

module.exports.noticias_atualizar = function(app, req, res){
	var noticia = req.body;
	var id_noticia = req.body.id_noticia;

		req.assert('titulo', 'Titulo é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('autor', 'Autor é obrigatório').notEmpty();
		req.assert('noticia', 'Notícia é obrigatório').notEmpty();		
		var erros = req.validationErrors();

		if(erros){
			res.render("admin/form_update_noticia", {validacao : erros, noticia: noticia}); 
			return;
		}
		var connection = app.config.dbConnection();		
		var noticiasModel = new app.app.models.NoticiasDAO(connection);
		
		noticiasModel.atualizarNoticia(noticia,
			noticiasModel.mostraNoticia(id_noticia, function(error, result){
			res.redirect('/noticia?id_noticia=' + id_noticia);					
		}));
}
