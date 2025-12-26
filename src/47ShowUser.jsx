import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

export default function ShowUserList() {
    const [userdata, setuserdata] = useState([]);
    const [loader, setloader] = useState(false);
    const navigate = useNavigate();


    async function getUserData() {
        const url = "http://localhost:3000/user";
        let response = await fetch(url);
        response = await response.json();
        //console.log(response);
        setuserdata(response);
        setloader(false);

    }
    useEffect(() => {
        (
            async () => {
                setloader(true)
                await getUserData();
            })();
    }, [])

    const userDelete = async (id) => {
        // console.log(id);
        const url = "http://localhost:3000/user";
        let response = await fetch(url + "/" + id, {
            method: "delete"
        });
        response = await response.json();
        if (response) {
            alert("record deleted")
        }
        getUserData()
    }

    const userEdit = (id)=>{
        navigate("/edit/"+id)
    }

    return (
        <>
            <h3>User Data</h3>
            {!loader ?
                userdata && userdata.map((item, index) => (
                    <div style={{ margin: "20px" }} key={index}>
                        <h3 > name :{item.name}</h3>
                        <h3 > class :{item.classs}</h3>
                        <h3 > age :{item.age}</h3>
                        <button onClick={() => {
                            if (window.confirm("Are you sure?")) {
                                userDelete(item.id);
                            }
                        }}>Delete</button>
                        <button onClick={()=>{userEdit(item.id)}}>Edit</button>
                        <hr />
                        <hr />
                    </div>
                ))
                : <h1>Data Loading...</h1>
            }

        </>
    )
}