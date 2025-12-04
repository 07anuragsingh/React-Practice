import { useRef, useState } from "react"
import ForwardREf from "./30UseRefPassing";
export default function UseRefExample() {
    const BtnRef = useRef(null)
    function inputHandler() {
        BtnRef.current.focus();
        BtnRef.current.style.color = "red";
        BtnRef.current.placeholder = "red";
    }
    const H1Ref = useRef(null)
    function h1Handler() {
        H1Ref.current.style.color = "green";
    }
    const H1Ref2 = useRef(null)
    function h1Handler2() {
        H1Ref2.current.style.color = "green";
    }
    const [toggle, setToggle] = useState(true)
    const hideShow = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <div>       
                <input type="text" ref={BtnRef} placeholder="enter ur name"></input>
                <button onClick={inputHandler}>Input Handler</button>
                <hr />
                <hr />
                <ForwardREf h1Handler={h1Handler} h1Handler2={h1Handler2} hideShow={hideShow} H1Ref={H1Ref} H1Ref2={H1Ref2} toggle={toggle}  />
                
                {/* we can pass ref as props also */}


            </div>
        </>
    )
}