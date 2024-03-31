import React, { useState} from "react";
import Notes from "../../components/Notes";
import Home from "../../components/Home";
import myContext from "./noteContext";
import NoteItem from "../../components/NoteItem";

const NoteState = (props) => {
 
  const notesInitial=[
    {
    "id":"1",
        "name":"Ayesha",
        "semester":"8A",
        "roll No":"12298",
        "uniname":"NUML",
        "title":"mytitle1",
        "description":"Hello Ayesha speaking from National university of modern languages"
        },
        {
          "id": "2",
          "name":"Rida",
        "semester":"7A",
        "roll No":"12299",
        "uniname":"NUML",
        "title":"mytitle",
        "description":"Hello Rida speaking from National university of modern languages"
        }
          ];
  
  const [notes,setNotes]=useState(notesInitial)

  //add a note
  const addNote=(title,description,uniname)=>{
    console.log("adding a new note")
    const note= {
      "id": "3",
      "name":"Danyal",
    "semester":"9B",
    "roll No":"24",
    "uniname":uniname,
    "title":title,
    "description":description
    };
  setNotes(notes.concat(note))
  }
  //delete a note
  const deleteNote=(id)=>{
    console.log("deleting the node with id:"+id)
    const newNotes=notes.filter((note)=>{return note.id!==id})
    setNotes(newNotes)
  }
  //Edit a note
  const editNote=(id,title,description,uniname)=>{
    
  }
  return (
    <myContext.Provider value={{notes,addNote,deleteNote,editNote}}>
    {props.children}
    </myContext.Provider>
  );
};
export default NoteState;
