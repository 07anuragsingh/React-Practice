import { useState } from "react";

export default function Toggle(){
const [dispay,setDispay]= useState(true);
function changeDisplay(){
    setDispay(!dispay);
}


    return(
        <>
        <button onClick={changeDisplay}>Hide and Show</button>
        {dispay?<h1>"Anurag Kumar Singh "</h1>: null}
        
        </>
    )
}