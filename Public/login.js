function Login(){
  
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext); 
  var currentUser = '';

  function validateLogin(){
    console.log("Login Button Pressed");
    console.log(this);

    console.log(email);
    console.log(password);
    console.log(ctx.users);
    for (var i = 0; i < ctx.users.length; i++){
      console.log(ctx.users[i]);
      if (email === ctx.users[i].email) {
        if (password === ctx.users[i].password) {
          alert("Log In Success");
          window.userName = ctx.users[i].name;
          document.getElementById('Login').innerHTML = window.userName;
          currentUser = window.userName;
          setShow(false);
        }
      }
      else (console.log("Incorrect email/password"));
    }
  }
    
  function clearForm(){
    window.userName = '';
    setShow(true);
    document.getElementById('Login').innerHTML = '';
  }

  return (
    <div>
    <h1>Log In</h1>
    <Card
      bgcolor="primary"
      header="Log In"
      status={status}
      body = {show ? (  
        <>
        
        Email address<br/>
        <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
        Password<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn btn-light" onClick={validateLogin}>Log In</button>
        </>

  ) :(
    <>
    <h5>User Already Logged In</h5>
    <button type="submit" className="btn btn-light" onClick={clearForm}  >Log Out</button>
    
    </>
  ) }
    />
    <a href="#">Home</a> 
  </div>
  )  ;
};
