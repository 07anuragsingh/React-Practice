import { lazy, Suspense, useState } from "react"
// import User from "./52UserList"

export default function Lazyloading(){
    
    const [load,setload]= useState(false);
    const User = lazy(()=>import('./52UserList'))
    return(
        <>
        <h1>Lazy Loading</h1>
        <button onClick={()=>setload(true)}>Show</button>
        {/* {load && <User/>} */}
        {load ?
        <Suspense fallback={<h4>Loading...</h4>}><User/></Suspense>
        :null }
        </>
    )
}