function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">New Bank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" title="Go Here to Create an Account">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/" title="Go Here to Login into an Existing Account">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" title="Go Here to Withdraw Money from Your Account">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" title="Go Here to Deposit Money into Your Account">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" title="Go Here to find where I haven't hidden your data">AllData</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="#/Mongo/" title="Go Here to find where I haven't hidden your data">Mongo</a>
          </li>                 
        </ul>
      </div>
    </nav>
    </>
  );
}