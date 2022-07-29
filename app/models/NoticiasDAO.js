function NoticiasDAO(connection){
	conn = connection;

	this.getNoticias = function(callback){
		conn.query('select * from noticias ORDER BY data_criacao DESC', callback);
	}

	this.getNoticia = function(id_noticia, callback){
		conn.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
    }

	this.salvarNoticia = function(noticia, callback){
		conn.query('insert into noticias set ?', noticia, callback);
	}

	this.get5UltimasNoticias = function(callback){
		conn.query('select * from noticias order by data_criacao desc limit 5', callback);
    }

    this.buscaNoticias = function(pesquisa, callback){
		conn.query('select * from noticias where titulo like ?', '%' + pesquisa + '%', callback);
    }

    this.excluiNoticia = function(id_noticia, callback){
		conn.query('delete from noticias where id_noticia = '+ id_noticia.id_noticia, callback);
    }

    this.atualizarNoticia = function(noticia, callback){
		conn.query("update noticias set titulo = '" + noticia.titulo +"', resumo = '" + noticia.resumo + "', autor = '" + noticia.autor + "', noticia = '" + noticia.noticia + "'where id_noticia = " + noticia.id_noticia, callback);
    }

    this.mostraNoticia = function(id_noticia, callback){
		conn.query('select * from noticias where id_noticia = ' + id_noticia, callback);
    }
}
    
module.exports = NoticiasDAO;

