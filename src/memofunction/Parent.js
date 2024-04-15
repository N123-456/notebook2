import React,{useState,useCallback} from 'react';
import Child from './Child';
const Parent = () => {
  // const [count, setCount] = useState(0);

  // // Memoize the increment function
  // const increment = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]); // Recreate the function only if count changes
   const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [num, setNum] = useState(0);
  // const increment = () => {
  //   setCount((c) => c + 1);
  //   };
  // const addTodo = useCallback(() => {
  //   setTodos((t) => [...t, "New Todo"]);
  // }, [todos]);

  return (
    <div>
     {/* <p>Count: {count}</p>
      <Child onIncrement={increment}/> */}
      {/* <Child todos={todos} addTodo={addTodo} /> */}
      <h1>{num}</h1>
      <Child />
      <button onClick={() => setNum(num + 1)}> Addition </button>
    </div>
  );

}
export default Parent;
