import React,{useState} from 'react';

const memo = () => {
    const [counterOne,setCounterOne]=useState(0);
    const [counterTwo,setCounterTwo]=useState(0);
    const IncrementOne=()=>{
    setCounterOne(counterOne+1)
    }
    const IncrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    const isEven=()=>{
        
    }
  return (
    <div>
      <button onClick={IncrementOne}>Counter -{}</button>
      <button onClick={IncrementTwo}>Counter -{}</button>
    </div>
  );
}

export default memo;
