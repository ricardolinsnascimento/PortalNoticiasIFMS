var app = require('./config/server');

//var rotaNoticias = require('./app/routes/noticias')(app);

//var rotaHome = require('./app/routes/home')(app);

//var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

app.set('view engine' , 'ejs'); //informamos ao Express que o EJS é o engine de views


app.listen(3000,function(){
	console.log('Servidor ON');
});