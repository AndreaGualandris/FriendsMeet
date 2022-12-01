
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;
const MongoClient = mongodb.MongoClient;

const mongodb_uri = 'mongodb://localhost:27017';
const db_name = 'friendsmeet';
const collection_name = 'events';

const model = {};


MongoClient
    .connect(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client=>{
        console.log("[@] Connected to: " + mongodb_uri);
        model.db = client.db(db_name);
        model.events = model.db.collection(collection_name);
        model.users = model.db.collection('users');

    })
    .catch(err => console.error(err));


exports.model = model;