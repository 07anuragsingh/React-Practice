import useToggle from "./39useToggle"

export default function CustomHooks(){
    const [value,toggleValue]=useToggle(true);
    const [value2,toggleValue2]=useToggle(true);

    return (
        <>
        <button onClick={toggleValue}>Toggle</button>
        <button onClick={()=>toggleValue(false)}>Hide</button>
        <button onClick={()=>toggleValue(true)}>Show</button>
        {
            value ? <h2>Hello i am new Custom Hook</h2>:null
        }
        <hr />
        <hr />
        <button onClick={toggleValue2}>Toggle</button>
        <button onClick={()=>toggleValue2(false)}>Hide</button>
        <button onClick={()=>toggleValue2(true)}>Show</button>
        {
            value2 ? <h2>Hello i am new Custom Hook</h2>:null
        }
        </>

    )
}