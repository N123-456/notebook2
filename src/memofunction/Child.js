import React from 'react';
import Parent from './Parent';
const Child=()=>{
  console.log("child component rendered")

// const Child = memo(({todos, addTodo}) => {
    // console.log("child component Rendered")
  return (
    <div>
      {/* <h1>Child Component</h1>
      <button onClick={onIncrement}>Increment Count</button> */}
      
      <div>
      <h1>Hello World</h1>
    </div>
    </div>
  );
}
export default Child;
