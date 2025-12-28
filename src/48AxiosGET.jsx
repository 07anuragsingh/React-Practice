import DeleteUser from "./48AxiosDelete";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Nav, NavLink } from "react-bootstrap";

//🔥 Fetch me .json() ke baad direct data milta hai
//🔥 Axios me JSON data property ke andar hota hai

export default function AxiosApi() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);




    const baseURL = "http://localhost:3000/user";

    const getData = async () => {
        try {
            const resposne = await axios.get(baseURL);

            console.log(resposne.data);
            console.log(resposne);

            setUserData(resposne.data);


        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        (
            async () => {
                setLoading(true);
                await getData();
            }
        )();
    }, []);

    // const deleteUserMethod = async (id)=>{
    //     try {
    //        await axios.delete(`${baseURL}/${id}`);

    //        // Remove user from UI without reloading
    //        setUserData(userData.filter((user) => user.id !== id));
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // } 
    const handleDeleteFromUI = (id) => {
        setUserData(userData.filter((user)=>user.id !==id));
    }

    return (
        <>
            

            <h2>AXIOS API</h2>
            {!loading ?
                userData && userData.map((user) => (
                    <div style={{ margin: "10px" }} key={user.id}>

                        <h4>Name :{user.name}</h4>
                        <h4>Age:{user.age}</h4>
                        <h4>Class :{user.classs}</h4>
                        {/* <button onClick={()=>{
                            if(window.confirm("Are yor sure?")){
                                deleteUserMethod(user.id)
                            }
                        }}> Delete User</button> */}
                        {/* Different component */}
                        <DeleteUser id={user.id} onDelete ={handleDeleteFromUI}/>
                        <hr/>
                        <hr/>
                        
                    </div>
                ))
                : <h3>Loading Data from API</h3>
            }
        </>
    )
}

// get Method
