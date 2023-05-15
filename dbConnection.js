const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://cats_project:cats_project@cluster0.6vwn25v.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true});

client.connect(err => {
    if (!err) {
        console.log('Mongo DB connected');
    } else {
        console.log('Error: ', err);
        process.exit(1);
    }
});

module.exports = client;