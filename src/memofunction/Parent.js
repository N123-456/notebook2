import React,{useState} from 'react';
import Child from './Child';
const Parent = () => {
    const [counterOne,setCounterOne]=useState(0);
const IncrementOne=()=>{
    setCounterOne(counterOne+1)
    }
  return (
    <div>
    <Child/>
      <button onClick={IncrementOne}>Counter -{counterOne}</button>
    </div>
  );
}

export default Parent;
