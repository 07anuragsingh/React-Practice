import { useState } from "react"

export default function OnChangeEvent(){
    const [name,setName]= useState("");
    const [password,setPassword]= useState("");
    const [email,setEmail]= useState("");
    const [show,setShow]= useState(false)

    return(
        <>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)}
        placeholder="Enter your name "></input>
        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}
        placeholder="Enter your paswword "></input>
        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)}
        placeholder="Enter your Emial "></input>

        
        <button onClick={()=>{setName("");setEmail("");setPassword("");}} >Clear</button>
        
        <button onClick={()=>setShow(!show)}>Show_hide</button>
        {show && <h2>{name}</h2>}
        {show && <h2>{email}</h2>}
        {show && <h2>{password}</h2>}
        </>
    )
}