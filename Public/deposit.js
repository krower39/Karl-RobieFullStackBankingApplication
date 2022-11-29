function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [depositAmount, setdepositAmount]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);
  const [balance, setBalance]   =React.useState(ctx.users[0].balance);
  const [disabledButton, setdisabledButton] = React.useState(true);

  function bankDeposit (){
    if (depositAmount < 0){
      alert("Cannot Deposit Negative Amount");
      return;
    }
    if (isNaN(depositAmount)){
      alert("Can Only Deposit Numbers");
      return;
    }
    setBalance (Number(balance) + Number(depositAmount)); 
    ctx.users[0].balance = balance;
    console.log(ctx.users[0].balance);   
  }
  
  function onDeposit (newvalue) {
    setdepositAmount(newvalue);
    if (depositAmount) {
      setdisabledButton (false);     

    }
  }

  return (
    <div>
    <h1>Deposit</h1>
    <h1>{ctx.users[0].balance}</h1>
    <Card
      bgcolor="primary"
      header="Make a Deposit"
      status={status}
      body={  
              <>
              
              Balance<br/>
              <h2>{balance} </h2><br/><br/>
              Deposit Amount<br/>
              <input type="input" className="form-control" id="depositAmount" placeholder="Enter Deposit Amount" value={depositAmount} onChange={e => onDeposit(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={bankDeposit} disabled={disabledButton}>Deposit</button>
              </>
 
            }
    />
    </div>
  )
}
