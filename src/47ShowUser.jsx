import { useEffect, useState } from "react";

export default function ShowUserList() {
    const [userdata, setuserdata] = useState([]);
    const [loader,setloader] = useState(false)


    async function getUserData() {
        const url = "http://localhost:3000/user";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
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


    return (
        <>
            <h3>User Data</h3>
            { !loader ?
                userdata && userdata.map((item, index) => (
                    <div style={{margin :"20px"}} key={index}>
                    <h3 > name :{item.name}</h3>
                    <h3 > class :{item.class}</h3>
                    <h3 > age :{item.age}</h3>
                    <hr />
                    <hr />
                </div>
                ))
            :<h1>Data Loading...</h1>
                
            }

        </>
    )
}