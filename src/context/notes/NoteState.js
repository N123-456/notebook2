import React, { useState} from "react";
import Notes from "../../components/Notes";
import Home from "../../components/Home";
import myContext from "./noteContext";
import NoteItem from "../../components/NoteItem";
import Login from "../../components/Login";
const NoteState = (props) => {

          
          const arr=[];
          const storeData = (data) => {
            console.log("data is :",data)
            setNotes(...notes,data);
          };
          
  
  const [notes,setNotes]=useState(arr)
console.log(arr)
  //add a note
  const addNote=(title,description,uniname)=>{
    console.log("adding a new note")
  
  }
  //delete a note
  const deleteNote=(id)=>{
    console.log("deleting the node with id:"+id)
    const newNotes=notes.filter((note)=>{return note.id!==id})
    setNotes(newNotes)
  }
//Edit a note
  // const editNote=async (id,title,description,uniname)=>{
  //   async function logMovies() {
  //     const response = await fetch("http://example.com/movies.json");
  //     const movies = await response.json();
  //     console.log(movies);
  //   }
    
  // for (let index = 0; index < notes.length; index++) {
  //   const element = array[index];
  //   if(element.id===id){
  //     element.title=title;
  //     element.description=description;
  //     element.uniname=uniname;
  //   }
    
  
  
  return (
    <myContext.Provider value={{notes,storeData}}>
    {props.children}
    </myContext.Provider>
  );
  }
export default NoteState;
