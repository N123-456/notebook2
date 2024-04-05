import React, { useContext} from "react";
import myContext from "../context/notes/noteContext";
import NoteState from "../context/notes/NoteState";

const About = () => {
 
 const {notes}=useContext(myContext)
  return (
   <>
    <h1>user details</h1>
   
   <h2>{notes.name}</h2>
   <h2>{notes.email}</h2>
   <h2>{notes.password}</h2>
   </>
  );
};

export default About;
