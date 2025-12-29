import { useState } from "react"
import './49Style.css'

export default function SimpleValidation() {
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState();

    const [password, setPassword] = useState('');
    const [passErr, setPassErr] = useState();
    const namehandle = (event) => {
        const value = event.target.value;
        setName(event.target.value); // Asynchronusly - So name still contains the old value

        if (value.length > 5) {
            setNameErr("Character should be less than 5")
        }
        else {
            setNameErr()
        }
    }
    const handlepass = (event) => {
        const value = event.target.value;
        setPassword(value);

        const regex = /^[A-Z0-9]+$/i;

        if (value.length === 0) {
            setPassErr(""); // ✅ clear error when empty
        }
        else if (!regex.test(value)) {
            setPassErr("Special characters are not allowed");
        }
        else {
            setPassErr(""); // ✅ valid password
        }
    };

    return (
        <div>
            <input className={nameErr ? 'error' : ''} type="text" onChange={namehandle} placeholder="Enter Your Name"></input>
            <span style={{ color: "red" }}>{nameErr && nameErr}</span>
            <br></br>
            <br></br>
            <input className={nameErr ? 'error' : ''} type="text" onChange={handlepass} placeholder="Enter Your Password"></input>
            <span style={{ color: "red" }}>{passErr && passErr}</span>
            <br></br>
            <br></br>
            <button disabled={nameErr || passErr} >Login</button>
        </div>
    )
}