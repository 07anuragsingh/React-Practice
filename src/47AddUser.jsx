import { useState } from "react";

// Post Method For adding data
export default function AddUser() {
    const [name, setName] = useState('');
    const [classs, setClasss] = useState('');
    const [age, setAge] = useState('');

    const addUserData = async () => {
        const url = "http://localhost:3000/user";

        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, age, classs })
        });

        response = await response.json();

        if (response) {
            alert("User added");

            // ✅ Clear input fields
            setName('');
            setClasss('');
            setAge('');
        }
    };

    return (
        <>
            <div style={{ textAlign: "center"}}>
                <h2>Add User</h2>

                <label>Name: </label>
                <input
                    type="text"
                    placeholder="Enter user name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br /><br />

                <label>Class: </label>
                <input
                    type="text"
                    placeholder="Enter user class"
                    value={classs}
                    onChange={(e) => setClasss(e.target.value)}
                />
                <br /><br />

                <label>Age: </label>
                <input
                    type="text"
                    placeholder="Enter user age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <br /><br />

                <button onClick={addUserData}>Add User</button>
            </div>
        </>
    );
}
