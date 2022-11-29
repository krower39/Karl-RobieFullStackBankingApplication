const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
var dal     = require('./dal.js'); 

function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [disabledButton, setdisabledButton] = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext); 
  //var collection = db.collection('customers');
  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

//My attempt
//MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
  //console.log('Connected!')

//});

  function handleCreate(){
    console.log(name,email,password);
    //if (!validate(name,     'name'))     return;
    if (!name){
      alert("No Name Entered");
      return;
    }
    if (!email){
      alert("No Email Entered");
      return;
    }
    //if (!validate(email,    'email'))    return;
    if (!password){
      alert("No Password Entered");
      return;
    }
    if (password.length < 7) {
      alert("Need Longer Password");
      return;
    }
    //if (!validate(password, 'password')) return;
    
    ctx.users.push({name,email,password,balance:0});
    setShow(false);
    //My attempt
    

    var collection = db.collection('customers');
    var doc = {name, email, password, balance: 0};
    collection.insertOne(doc, {w:1}, function(err, result){
        console.log('Document inserted');
    });
     
    
    alert("Account Created!");
  }  


  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  

  function onChangeName (newvalue) {
    setName(newvalue);
    if (name && email && password) {
      setdisabledButton (false);     

    }
  }

  function onChangeEmail (newvalue) {
    setEmail(newvalue);
    if (name && email && password) {
      setdisabledButton (false);      
    }
  }

  function onChangePassword (newvalue) {
    setPassword(newvalue);
    if (name && email && password) {
      setdisabledButton (false);      
    }
  }

  return (
    <div>
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => onChangeName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => onChangeEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => onChangePassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" id="submit" onClick={handleCreate} disabled={disabledButton}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}  >Add another account</button>
              
              </>
            )}
    />
    <a href="#">Home</a>       
    </div>
  )
}