import React, { useContext } from 'react';
import myContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
const Notes = () => {
    const context=useContext(myContext)
    const {notes,setNotes}=context;
  return (
    <div className="container my-3">
        <h2>Your Notes</h2>
        {notes?.map((note)=>{
            <NoteItem note={note} />
        })} 
      
    </div>
  );
}
export default Notes;
