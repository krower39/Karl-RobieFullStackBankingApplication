//const { resolve } = require('path');

const MongoClient = require('mongodb').MongoClient;
const url         = 'mongodb://localhost:27017';
const dbName = 'myproject';
let db = null;



MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log('Connected for Bank Project');

    //connect to project database
    db = client.db('myproject');
    console.log(db);
    
    //console.log(err);
    
});

//create user account
function createUserDal(name, email, password){
    console.log('Here in Create User DAL');
    console.log(db);
    console.log(connection);
    
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        console.log('collection');
       const doc = {name, email, password, balance: 0};
       collection.insertOne(doc, {w:1}, function(err, result){
           err ? reject(err) : resolve(doc);
           console.log('Inserted');
       });
    })  
}

//all users
function all(){
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
            });
    })
}
module.exports = {createUserDal, all};