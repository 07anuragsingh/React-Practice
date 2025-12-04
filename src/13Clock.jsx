import { useEffect, useState } from "react"

export default function Clock({color}){
    console.log(color)
    const [time,setTime]= useState(new Date().toLocaleTimeString())
       useEffect(() => {
        const watch = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(watch);
    }, []);
    return(
        <>
        <h2 style={{color:color, border :"2px solid black", width:"90px", height:"",backgroundColor:"black",borderRadius:"5%"}}>{time}</h2>
        </>
    )
}