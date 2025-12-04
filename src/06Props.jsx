
export default function Props({fn=()=>alert("default fn is called")}){
    
   
    return(
        <>
        {/* name is :{name} */}


        {/* <h2>Name is :{object.name}</h2>
        <h2>age is:{object.age}</h2> */}

        {/* <h2>College Name :{ary[2]}</h2> */}
        {/* <h2>College name : {ary}</h2> */}

        {/* <h2>Student Name :{name}</h2> */}
        <button onClick={fn}>Click Me</button>


        </>
    )
}