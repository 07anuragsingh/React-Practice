import { useState } from "react"

export default function DerviedState() {
    const [allUsers, SetAllUsers] = useState([]);
    const [user, SetUser] = useState('');
    function handleSubmit() {
        if (user === '') return
        SetAllUsers([...allUsers, user])
    }
    const total = allUsers.length;
    const last = allUsers[allUsers.length - 1];
    const unique = [...new Set(allUsers)].length;


    return (
        <>
            <input type="text" onChange={(event) => (SetUser(event.target.value))} placeholder="Enter your Name"></input>
            {/* <h2>{user}</h2> */}
            <button onClick={handleSubmit}>Submit</button>
            <h3>Total users:{total}</h3>
            <h3>Last users :{last}</h3>
            <h3>Total Unique users :{unique}</h3>
            <h4>All users</h4>
            {allUsers.map((name, index) => (
                <ul key={index}>
                    <li>{name}</li>
                </ul>
            ))}
        </>
    )
}