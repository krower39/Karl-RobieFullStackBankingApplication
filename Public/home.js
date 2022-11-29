//const { Button } = require("bootstrap");

function Home(){
  return (
    <div>
    <Card
      txtcolor="green"
      header="Karl's New Bank"
      title="Welcome to the newly re-factored bank"
      text="You can move around using the navigation bar."
      body={(<img src="campus.jpg" className="img-fluid" alt="Responsive image"/>)}
    /> 
    <a href="#/CreateAccount/">
      Create Account
    </a>
    
    

    <a href="#/login/" style={{padding: 10 }}>
      Login
    </a>
    </div>
  );  
}
