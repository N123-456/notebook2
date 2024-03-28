import React,{useContext} from 'react';
import { myContext } from '../context/notes/Mainapp';

const CompC = () => {
    const data = useContext(myContext);
  return (
    <div>
    <h1>component 3</h1>
        <h2>My Roll NO is {data?.rollNo}</h2>
    </div>
  );
}

export default CompC;
