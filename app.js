var app = require('./config/server');

app.set('view engine' , 'ejs'); //informamos ao Express que o EJS é o engine de views

const port = process.env.PORT || 3000;

app.listen(port,function(){
	console.log('Servidor Portal de notícias utilizando porta ' + port);
});