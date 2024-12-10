import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const Register = ({regData}) => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
    const data={name,email,password}
    const handlereg=(e)=>{
        e.preventDefault();
        alert("Success");
        regData(data)
        navigate('/login');
    }
  return (
    <div>
        <form>
        <div className="form-group">
    <label for="name">Name:</label>
    <input type="text" className="form-control" id="name" onChange={(e)=>{setName(e.target.value)}}/>
  </div>
  <div className="form-group">
    <label for="email">Email address:</label>
    <input type="email" className="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
  <div className="form-group">
    <label for="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  <br />
  <button className="btn btn-primary" onClick={handlereg}>Submit</button>
</form>
    </div>
  )
}

export default Register