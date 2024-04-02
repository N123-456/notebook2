import React,{useContext, useState} from 'react';
import myContext from '../context/notes/noteContext';

const Signup = () => {
  const {storeData}=useContext(myContext)
    const [credentials,setCredentials]=useState(
      {name:"",email:"",password:""})

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newUser = { ...credentials };
        storeData(newUser);
      
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={onChange} name="name" value={credentials.name} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" onChange={onChange} name="email" value={credentials.email} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onChange} name="password" value={credentials.password} id="password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default Signup;
