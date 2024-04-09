import React,{useState,useCallback} from 'react';
import Child from './Child';
const Parent = () => {
  const [count, setCount] = useState(0);

  // Memoize the increment function
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Recreate the function only if count changes
    
  return (
    <div>
     <p>Count: {count}</p>
      <Child onIncrement={increment}/>
 
    </div>
  );

}
export default Parent;
