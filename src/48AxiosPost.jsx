import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";


export default function AxiosPost() {
    const baseURL = "http://localhost:3000/user";
    const [name, setName] = useState('');
        const [classs, setClasss] = useState('');
        const [age, setAge] = useState('');
        const navgate = useNavigate();

    const addUser = async () => {
        try {
            const resposne = await axios.post(baseURL, {name,age,classs
            });
            console.log(resposne.data);
            alert("user Added");
            navgate('/');



        } catch (error) {
            console.log(error);
        }
    }


    return (
        
            
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
                <button onClick={addUser}>ADD</button>
            </div>

        
    )
}