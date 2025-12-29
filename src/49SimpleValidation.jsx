import { useState } from "react";
import './49Style.css';

export default function SimpleValidation() {
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState('');

    const [password, setPassword] = useState('');
    const [passErr, setPassErr] = useState('');

    const namehandle = (event) => {
        const value = event.target.value;
        setName(value);

        if (value.length > 5) {
            setNameErr("Character should be less than 5");
        } else {
            setNameErr("");
        }
    };

    const handlepass = (event) => {
        const value = event.target.value;
        setPassword(value);

        const regex = /^[A-Z0-9]+$/i;

        if (value.length === 0) {
            setPassErr("");
        }
        else if (!regex.test(value)) {
            setPassErr("Special characters are not allowed");
        }
        else {
            setPassErr("");
        }
    };

    return (
        <div>
            <input
                className={nameErr ? 'error' : ''}
                type="text"
                onChange={namehandle}
                placeholder="Enter Your Name"
            />
            <span style={{ color: "red" }}>{nameErr}</span>

            <br /><br />

            <input
                className={passErr ? 'error' : ''}
                type="text"
                onChange={handlepass}
                placeholder="Enter Your Password"
            />
            <span style={{ color: "red" }}>{passErr}</span>

            <br /><br />

            <button disabled={!!nameErr || !!passErr}>Login</button>
        </div>
    );
}
