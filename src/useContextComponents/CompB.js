import React,{useContext} from 'react';
import { myContext } from '../context/notes/Mainapp';

const CompB = () => {
    const data= useContext(myContext);
  return (
    <div>
    
       <h1>Component B</h1>
      <h2>My name is {data?.name}</h2>
       {console.log("data=", data)} 
    </div>
  );
}

export default CompB;
