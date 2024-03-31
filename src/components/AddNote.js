import React, { useContext,useState } from 'react';
import myContext from '../context/notes/noteContext';
const AddNote = () => {
    const context=useContext(myContext)
    const {addNote}=context;
    const [note,setNote]=useState({title:"",description:"",uniname:""})
    const handleClick=(e)=>{
        e.preventDefault();
    addNote(note.title,note.description,note.uniname)
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div className='container my-3'>
      <h2>Add a note</h2>
    <form className="my-3"> 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input type="text" class="form-control" id="description" name="description" onChange={onChange}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>
</div>
 
    
  );
}

export default AddNote;
