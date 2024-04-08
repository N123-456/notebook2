import React,{useMemo, useState} from 'react';
import Parent from './Parent';

const Memos = () => {
    
    const [counterTwo,setCounterTwo]=useState(0);
    
      const IncrementTwo=()=>{
          setCounterTwo(counterTwo+1)
      }
    //   const isEven=useMemo(()=>{
    //     console.warn('......')
    //     let i=0;
    //     while(i<200000000) i++;
    //       return counterOne%2===0;
    //   },[counterOne])
  return (
    <div>
       
      {/* <span>{isEven?"Even":"Odd"}</span> */}
      <button onClick={IncrementTwo}>Counter -{counterTwo}</button>
    </div>
  );
}

export default Memos;
