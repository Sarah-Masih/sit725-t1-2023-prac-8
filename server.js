var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port,()=>{
    console.log('App listening to: ' + port);
});

app.get('/api/cats', (req,res) => {
    res.json({statusCode: 200, data: cardList, message: 'Success'});
})

function dbConnection(collectionName)
{
    client.connect(err =>1){
        dbCollection = client.db().collection(collectionName);
        if(!err){
            console.log('DB Connected');
            console.log(dbCollection);
        }
        else{
            console.error(err);
        }
    }
}

app.post('/api/cats', (res, req) => {
    let cat = req.body;
    insert();
})

function insert(cat, callback){
    dbCollection.insertOne(cat, callback);
}

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log('App listening to: ' + port);
    dbConnection('Cats');
})