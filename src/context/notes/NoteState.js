import { useState} from "react";
import Notes from "../../components/Notes";
import Home from "../../components/Home";
import myContext from "./noteContext";
import NoteItem from "../../components/NoteItem";

const NoteState = (props) => {
 
  const notesInitial=[
    {
        "name":"Ayesha",
        "semester":"8A",
        "roll No":"12298",
        "uniname":"NUML",
        "title":"mytitle1",
        "description":"Hello Ayesha speaking from National university of modern languages"
        },
        {
          "name":"Rida",
        "semester":"7A",
        "roll No":"12299",
        "uniname":"NUML",
        "title":"mytitle",
        "description":"Hello Rida speaking from National university of modern languages"
        }
          ];
  
  const [notes,setNotes]=useState(notesInitial)
  return (
    <myContext.Provider value={{notes,setNotes}}>
    {props.children}
    </myContext.Provider>
  );
};
export default NoteState;
