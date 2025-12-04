import { useState } from "react"

export default function MultipleCondition(){

const[count,SetCount] = useState(1)
function updateCount(){
    SetCount(count +1)
}
let message;
if(count ==1){
            message=<h2>Condition 1 is executes</h2>;
        }
else if(count ==2){
       message= <h2>Condition 2 is executes</h2>;
    }
else if(count ==3){
        message=<h2>Condition 3 is executes</h2>;
    }
else if(count ==4){
        message=<h2>Condition 4 is executes</h2>;
    }
else{
        message=<h2>Other Condition</h2>
    }

    return(
        <>
    {// it is a expression
        // count ==1?<h2>Condition 1 is executed</h2> 
        // :count ==2?<h2>Condition 2 is executed</h2>
        // :count ==3?<h2>Condition 3 is executed</h2>
        // :count ==4?<h2>Condition 4 is executed</h2>
        // :<h2>Other Condition</h2>
        }
    
    <h2>{message}</h2>
    <h2>{count}</h2>
    <button onClick={updateCount}>Counter</button>
    <button onClick={()=>{SetCount(count-1)}}>Reducer</button>
        </>
    )
}