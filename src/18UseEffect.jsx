import { useEffect, useState } from "react";
import PropsSideEffectCompo from "./19PropsSideEffect";

export default function UseEffectCompo() {
    const [count, SetCounter] = useState(0);
    const [data, SetData] = useState(0);
    const [display, setdisplay] = useState(true);

    function Example() {
        console.log(" Example fn is calling");
    }
    function Example2() {
        console.log(" Example2 fn is calling");
    }
    





    useEffect(() => (console.log(Example())), []);
    // useEffect(()=>{
    //     console.log(Example2())
    // },[count,data])




    return (
        <>
            <button onClick={() => (SetCounter(count + 1))} > Count </button>
            <button onClick={() => (SetData(data - 1))}>Data </button>
            <button onClick={()=>(setdisplay(!display))}>HideAndShow</button>
            
            {
                display ? <PropsSideEffectCompo count={count} data ={data}/> : null
            }

        </>
    )
}