import { useState } from "react";
import Fruits from "./03.1States";


const Counter = () => {


// counter
const[count,setCount]= useState(0)

// reduce by 2
const[rCount,Count]=useState(50)


// reducer removed — use `setCount` to decrement the counter

 return(
    <>
    <Fruits/>
    <h3>Counter : {count}</h3>
    
    <button onClick={()=> setCount(count+1)}>Count</button>
    <button onClick={()=> setCount(count-1)}>Reduce</button>

    <h3>rcount :{rCount}</h3>
    <button onClick={()=> Count(rCount-2)}>Rcount</button>
    <button onClick={()=> Count(rCount+2)}>inccount</button>
    </>
 )
}
 export default Counter;