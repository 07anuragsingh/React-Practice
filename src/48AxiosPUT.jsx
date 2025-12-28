import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function EditUserDetail() {
    const [name, setName] = useState('');
    const [classs, setClasss] = useState('');
    const [age, setAge] = useState('');

    const baseURL = "http://localhost:3000/user";
    const {id} = useParams();
    const navigate = useNavigate()

    // Populate Details first in the Inputs
    const getUserDetails = async()=>{
        try {
          const response =  await axios.get(`${baseURL}/${id}`);
          console.log(response.data);
          setAge(response.data.age);
          setClasss(response.data.classs);
          setName(response.data.name)
          
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        (
            async ()=>{
                await getUserDetails();
            }
        )();

    },[]);

    // Editing Logic
    const editUser =async(name,classs,age)=>{
        const res = await axios.put(`${baseURL}/${id}`,{name,classs,age})
        if(res){
            alert('user Added')
            navigate('/')
        }
    }

    return (

        <div style={{ textAlign: "center" }}>
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
            <button onClick={()=>editUser(name,classs,age)}>ADD</button>
        </div>
    )
}