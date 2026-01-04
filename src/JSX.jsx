// import { createElement } from "react";

// export default function Jsx(){
//     // return createElement("div",{id:"rootDive"},"hello i am a div")
//     return createElement("div",{id:"rootDiv"},createElement("h1",{id:"Heading1"},"ANurag"))
// }
// export default function JSX(){
//     const a = 10;
//     const b = 10;
//     const username ="Anurag singh";

//     return(
//         <>
//         product of a and b is {a*b} 
//         <h2>My name is : {username}</h2>
//         <button onClick={()=>alert('hello')}>Click ME</button>
//         </>  
//           )
// }

export default function JSX(){
    return (
        <>
        <h2>Anurag Kumar singh</h2>
        <img src="public\vite.svg" alt="no enternt connection"></img>
        <ul>
            <li>i love my india</li>
            <li>kya ho rha bau</li>
            <li>mst hai</li>
        </ul>
        <button onClick={()=>{confirm("button clicked")}}>Hello</button>
        </>
    )
}