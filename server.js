var express = require('express');
var app = express();

//var port = process.env.port || 3000;

//const {MongoClient} = require('mongodb');
//const uri = 'mongodb+srv://cats_project:cats_project@cluster0.6vwn25v.mongodb.net/?retryWrites=true&w=majority';
//const client = new MongoClient(uri);
//let dbCollection;

require('./dbConnection');

let router = require('./route/route');


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/',router);


//app.listen(port,()=>{
    //console.log('App listening to: ' + port);
//});

//app.get('/api/cats', (req,res) => {
 //   res.json({statusCode: 200, data: cardList, message: 'Success'});
//})

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log('App listening to: ' + port);
    //dbConnection('Cats');
})