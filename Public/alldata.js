function AllData(){
  const [show, setShow]         = React.useState(true);
  const [disabledButton, setdisabledButton] = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);
  return (
    <div>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    
    </div>
  );
}
          
