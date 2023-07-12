const NoticiasDAO = require('../models/NoticiasDAO');

module.exports.noticias = function(app, req, res){

	var connection = app.config.dbConnection();
	var noticiasModel = new NoticiasDAO(connection);
	
	noticiasModel.getNoticias(function(error, result){
		connection.end();  
		res.render('noticias/noticias',{noticias:result});
	});
		
}

module.exports.apinoticias = function(app, req, res){

	var connection = app.config.dbConnection();
	var noticiasModel = new NoticiasDAO(connection);
	
	noticiasModel.getNoticias(function(error, result){
		connection.end();  
		res.json(result);
	});
		
}


module.exports.noticia = function(app, req, res){
	  
	   var connection = app.config.dbConnection();
	   var noticiasModel = new NoticiasDAO(connection);

	   if (req.query.id_noticia){
	   		   var id_noticia = req.query; //id_noticia recebe o parâmetro enviado pelas views,
	         //que contém o id da notícia a ser exibida
	   } else{
	   		res.redirect('/noticias');
	  	 	return;
	   }


	   noticiasModel.getNoticia(id_noticia,function(error, result){
	   	   connection.end();  
	       res.render('noticias/noticia',{noticia:result});
		});

}

module.exports.busca = function(app, req, res){
	var pesquisa = req.body.pesquisa;
	var connection = app.config.dbConnection();
	var noticiasModel = new NoticiasDAO(connection);

	noticiasModel.buscaNoticias(pesquisa, function(error, result){
		connection.end();  
		res.render('noticias/noticias',{ noticias : result });
		
	});
}

module.exports.excluir = function(app,req,res){
	var pesquisa = req.body.pesquisa;
	var connection = app.config.dbConnection();
	var noticiasModel = new NoticiasDAO(connection);

	if (req.query.id_noticia){
		var id_noticia = req.query;
	}
	else{
		res.redirect('/noticias');
		return;
	}
	noticiasModel.excluiNoticia(id_noticia, function (error, result){
		connection.end();  
		res.redirect('/noticias');
	});
}

module.exports.editar = function(app,req,res){
        var pesquisa = req.body.pesquisa; 
        var connection = app.config.dbConnection(); 
        var noticiasModel = new NoticiasDAO(connection);


        if (req.query.id_noticia){
            var id_noticia = req.query;
        } else{
            res.redirect("/noticias")
            return;
        }

        noticiasModel.getNoticia(id_noticia, function(error, result){
        	  connection.end();  
               res.render("admin/form_update_noticia", {validacao:{}, noticia : result});
        });
        
}


	
		