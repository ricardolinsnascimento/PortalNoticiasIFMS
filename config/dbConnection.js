var mysql = require('mysql');

var connMySQL = function(){
	console.log('Conexão com DB foi estabelecida');
	return mysql.createConnection({
	host: 'localhost',
	user:'root',
	password:'password',
	database: 'portal_noticias'
	});
}

module.exports = function(){
	
	console.log('O autoload carregou o módulo de conexão com o DB');
	return connMySQL;

}

