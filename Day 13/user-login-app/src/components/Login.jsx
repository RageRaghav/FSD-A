import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({regLogin}) => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate();
  const handleLog=(e)=>{
    e.preventDefault();
    if(regLogin.email==email && regLogin.password==password){
      alert("Login Successful");
      navigate("/dashboard");
    }
    else{
      alert("Error");
    }
  }
 
  return (
    <div>
      <form>
  <div className="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
  <div className="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd" onChange={(e)=>{setPassword(e.target.value)}} />
  </div>
  <br />
  <button className="btn btn-success" onClick={handleLog}>Submit</button>
</form>
    </div>
  )
}

export default Login