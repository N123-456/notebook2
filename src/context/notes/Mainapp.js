import React,{createContext,useContext,useEffect,useState,useEffect} from 'react';
import CompB from '../../useContextComponents/CompB';
import CompC from '../../useContextComponents/CompC';
export const myContext=createContext();
// useEffect(()=>
// {console.log("Mounted")},[]
// );

const Mainapp = () => {
   
    const [state]=useState({
        name:"Ayesha",
        rollNo:"32"
    })
  return (
    <div>
      <h1>Component A</h1>
<myContext.Provider value={state}>
        <CompB/>
        <CompC/>
      </myContext.Provider>
     </div>
  );
}

export default Mainapp;
