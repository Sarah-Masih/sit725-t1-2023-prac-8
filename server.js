var express = require('express');
var app = express();

//var port = process.env.port || 3000;

const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://cats_project:cats_project@cluster0.6vwn25v.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
let dbCollection;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//app.listen(port,()=>{
    //console.log('App listening to: ' + port);
//});

//app.get('/api/cats', (req,res) => {
 //   res.json({statusCode: 200, data: cardList, message: 'Success'});
//})

function dbConnection(collectionName)
{
    client.connect(err =>
    {
        dbCollection = client.db().collection(collectionName);
        if(!err){
            console.log('DB Connected');
            console.log(dbCollection);
        }
        else{
            console.error(err);
        }
    });
}

app.post('/api/cats', (req, res) => {
    let cat = req.body;
    insert(cat, (err, result=>{
        if(err)
        {
            res.json({statusCode:400, message:err});
        }
        else{
            res.json({statusCode:200, data: result, message:'cat successfully added'});
        }
    }));
});

app.get('/api/cats',(req,res) => {
    getAllCats((err, result) => {
        if(err){
            res.json({statusCode:400, message:err});

        }
        else{
            res.json({StatusCode:200, data:result, message:'Successful'});
        }
    });
})

function insert(cat, callback){
    dbCollection.insertOne(cat, callback);
}
function getAllCats(callback){
    dbCollection.find().toArray(callback);
}

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log('App listening to: ' + port);
    dbConnection('Cats');
})