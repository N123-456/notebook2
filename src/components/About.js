import React, { useContext} from "react";
import myContext from "../context/notes/noteContext";
import NoteState from "../context/notes/NoteState";

const About = () => {
 
 const {notes}=useContext(myContext)
  return (
   <>
    <h1>user details</h1>
    <h2>user detail is: {notes.name}</h2>
   </>
  );
};

export default About;
