import React,{useState,useContext} from 'react';
import AddNote from './AddNote';
import myContext from '../context/notes/noteContext';
import Signup from './Signup';
import NoteState from '../context/notes/NoteState';
const Login = (e) => {

  const {notes}=useContext(myContext)
    const [credentials,setCredentials]=useState([{email:"",password:""}])
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const user = notes?.find((note) => note.email === credentials.email && note.password === credentials.password);
        if(user)
        {
          alert('user exist')
        }
        else{
          alert('not exist')
        }
        //storeData(credentials);
    }
   
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
   
  return (
    <div>
    
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" id="password" value={credentials.password} onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  );
}

export default Login;
