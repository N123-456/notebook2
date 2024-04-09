import React,{memo} from 'react';
import Parent from './Parent';
const Child = memo(({onIncrement}) => {
    // console.log("child component Rendered")
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={onIncrement}>Increment Count</button>
    </div>
  );
})

export default Child;
