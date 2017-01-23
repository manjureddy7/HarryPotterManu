var express=require('express');

var app=express();

var routes=require('./routes');

var path=require('path');

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');

// Routes

// Home route

app.get('/',routes.home);
app.get('/harry_potter_series/:episode_number?',routes.movie_single);
app.get('*',routes.notFound);


app.listen(8000,function(){
	console.log("Abrakadabra on 8000");
});

console.log("harry on here");