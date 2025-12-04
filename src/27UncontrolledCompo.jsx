import { useRef } from "react";
import { Button } from "react-bootstrap";


export default function UncontolledCompo() {
    const nameRef = useRef();
    const passRef = useRef();


    function handleForm(event) {
        event.preventDefault();
        const username = document.querySelector("#name").value;
        const password = document.querySelector("#password").value;
        console.log(username, password)

    }
    function handleForm2(event) {
        event.preventDefault();
        const username = nameRef.current.value;
        const password = passRef.current.value;
        console.log(username, password)
    }
    return (
        <>
            <h1> Uncontrolled component using DOM</h1>
            <form>
                <input type="text" id="name" placeholder="enter ur name"></input>
                <input type="password" id="password" placeholder="password"></input>
                <Button onClick={handleForm}> Submit</Button>
            </form>
            <hr />
            <hr />
            <h1> Uncontrolled component using useRef()</h1>
            <form>
                <input type="text" ref={nameRef} placeholder="enter ur name"></input>
                <input type="password" ref={passRef} placeholder="password"></input>
                <Button onClick={handleForm2}> Submit</Button>
            </form>
        </>
    )
}