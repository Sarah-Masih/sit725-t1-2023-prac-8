let client = require('../dbConnection');
let collection = client.db('test').collection('Cats');

const insertCat = (cat, callback) => {
    collection.insertOne(cat, callback);
}

const getCats = (callback) => {
    collection.find().toArray(callback);
}

const remove = (cat, callback) => {
    collection.deleteOne(cat, callback);
}

module.exports = {insertCat, getCats, remove}