import { useState } from "react";

export default function Fruits(){
const [fruit,ChangeFruit] =useState("Apple");


 return(
    <>
    <h3>{fruit}</h3>
    <button onClick={()=>ChangeFruit("banana")}>Change Fruit</button>
    </>
 )
 
};