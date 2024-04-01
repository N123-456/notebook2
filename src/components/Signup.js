import React,{useState} from 'react';

const Signup = () => {
    const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""})
    const [password,setPassword]=useState("")

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const {name,email,password}=credentials;
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',headers: {
                'Content-Type': 'application/json'
            },body: JSON.stringify({name,email,password})});
        const json=await response.json()
        console.log(json);
        if(json.success){
            localStorage.setItem('token',json.authtoken);
            // history.push("/")
        }
        else{
            alert('invalid credentials');
        }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={onchange} name="name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" onchange={onChange} name="email" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" onchange={onChange} name="password" id="password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" onchange={onChange} name="cpassword" id="cpassword"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default Signup;