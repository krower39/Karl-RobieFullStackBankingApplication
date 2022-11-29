function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdrawAmount, setWithdrawAmount]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);
  const [balance, setBalance]   =React.useState(ctx.users[0].balance);
  const [disabledButton, setdisabledButton] = React.useState(true);
  

  function bankWithdraw (){
    if (!withdrawAmount){
      alert("No Amount Entered");
      return;
    }
    if (balance - withdrawAmount < 0) {
      alert("Insufficient Funds");
      return;
    }
    if (isNaN(withdrawAmount)){
      alert("Can Only Withdraw Numbers");
      return;
    }
    setBalance (balance - withdrawAmount); 
    ctx.users[0].balance = balance;
    console.log(ctx.users[0].balance); 
  }

  function onWithdraw (newvalue) {
    setWithdrawAmount(newvalue);
    if (withdrawAmount) {
      setdisabledButton (false);     

    }
  }

  return (
    <div>
    <h1>Withdraw</h1>
    <h1>{ctx.users[0].balance}</h1>

    <Card
      bgcolor="primary"
      header="Make a Withdraw"
      status={status}
      body={  
              <>
              
              Balance<br/>
              <h2>{balance} </h2><br/>
              Withdraw Amount<br/>
              <input type="input" className="form-control" id="withdrawamount" placeholder="Enter Withdrawel Amount" value={withdrawAmount} onChange={e => onWithdraw(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={bankWithdraw} disabled={disabledButton}>Withdraw</button>
              
              </>
 
            }
    />
    </div>
  )
}
