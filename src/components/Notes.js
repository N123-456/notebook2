import React, { useContext } from 'react';
import myContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
const Notes = () => {
  const context=useContext(myContext)
  const {notes,addNote}=context;
  return (
    <>
    <AddNote/>
    <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container">
        {notes.length===0 && 'No notes to display</div>'}
        </div>
        {notes?.map((note) => (
            <NoteItem key={note.id} note={note} />
        ))}
      
    </div>
    </>
  );
};
export default Notes;
