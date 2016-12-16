var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');

var Book = require('./../models/bookModel');
bookRouter = require('./../Routes/bookRoutes')(Book);

var app = express();

app.set('port', (process.env.PORT || 3000));
app.get('/', function(req,res){
  res.send
  res.send('Welcome to my API, said Dave');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.use('/api/books', bookRouter);
//app.use('/api/authors', authorRouter);



app.get('*', function(request, response) {
  response.sendFile(path.join( __dirname, '../src/index.html'));
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


