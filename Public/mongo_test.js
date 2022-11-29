const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

//var customerName = '';
//var customerEmail = '';
//var customerPassword = '';
//var customerBalance = '';


MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log('Connected!')
    //const ctx = React.useContext(UserContext); 
    // database Name
    const dbName = 'myproject';
    const db = client.db(dbName);
    const ctx = React.useContext(UserContext); 

    //new user
    //var customerName = ctx.users[i].name;
    //var customerEmail = ctx.users[i].email;
    //var customerPassword = ctx.users[i].password;
    //var customerBalance = ctx.users[i].balance;
    var name = ctx.users.name;
    var email = name + '@mit.edu';
    //Karl Big Test
    
  

    //insert into customer table 
    var collection = db.collection('users');
    var doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err, result){
        console.log('Document insert');
    });
});
