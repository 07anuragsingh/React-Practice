function ClickMe(){
         alert("Hello the ClickEvent executed");
    }
// andar rahe ya bahar koi dikkat nhi h

export default function ClickEvent(){
    

    const arrowFunction = ()=>{
        alert("Hello the arrowfunction executed");
    }

    function paraFunction(name){
        alert(name);
    }

    return(
        <>
        <h2>Click On the Below Button</h2>
        <button onClick={ClickMe}>ClickMe</button>
        <button onClick={arrowFunction}>ArowFn</button>

        {/*  how to call a function that require parameter */}

        <button onClick={()=>paraFunction("apple")}>ParaFn</button>
        </>
    )
}

