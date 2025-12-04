import { useEffect } from "react"

export default function PropsSideEffectCompo({count,data}){

    function getCounter(){
        console.log("hello getCounter side effect")
    }
    function getData(){
        console.log("hello getData side effect")
    }
    // getCounter();


    useEffect(()=>{
        getCounter();
    },[]) // Mount State life cycle


    useEffect(()=>{
        getData();
    },[data]) // Update State life cycle

    useEffect(()=>{
        return ()=>{
            console.log("unmount fhase");
        }
    },[])



    return(
        <>
        <h2>Countrr:{count}</h2>
        <h2>Data{data}</h2>
        </>
    )
}