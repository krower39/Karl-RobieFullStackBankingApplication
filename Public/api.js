const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

//context is globally shared
const ctx = {
    "accounts": [
        {
            "name": "peter",
            "email": "peter@mit.edu",
            "balance": 0,
            "password": "secret"
        }
    ]
}

function create() {
    const name      = document.getElementById('name');
    const email     = document.getElementById('email');
    const password  = document.getElementById('password');
    const status    = document.getElementById('status');
    ctx.accounts.push({
        name: name.value, 
        email: email.value,
        password: password.value,
        balance:100
    });
    name.value      = '', 
    email.value     = '',
    password.value  = '';
    status.innerHTML = 'Account Created!';
}

function AllData(){
    const status = document.getElementById('allDataStatus');
    status.innerHTML = JSON.stringify(ctx.accounts);
}

function CreateAccount2(){
    console.log('Create Account Hit');
    MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
        console.log('Connected!')
    
        // database Name
        const dbName = 'bad_bank_db';
        const db = client.db(dbName);
    
        //new user
        var name = 'user' + Math.floor(Math.random()*10000);
        var email = name + '@mit.edu';
    
        //insert into customer table 
        var collection = db.collection('customers');
        var doc = {name, email};
        collection.insertOne(doc, {w:1}, function(err, result){
            console.log('Document insert');
        });
    });
}