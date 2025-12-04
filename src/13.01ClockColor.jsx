import { useState } from "react";
import Clock from "./13Clock";
export default function ClockColor(){
    const [color,SetColor] = useState("pink")
    return(
        <>
        <h3>Select the color of Clock</h3>
        <select defaultValue="pink" onChange={(event)=>SetColor(event.target.value)}>
            <option value="Red">Red</option>
            <option value="pink">pink</option>
            <option value="yellow">yellow</option>
            <option value="Brown">Brown</option>
            <option value="blue">Blue</option>
        </select>
        <h4>Selected Color is:{color}</h4>
        <Clock color={color}/>
        </>
    )
}