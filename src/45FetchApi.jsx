import { useEffect, useState } from "react"


export default function GetUserFromApi() {
    //     const[userData,setUserData] = useState([]);

    //     async function getUserData(){
    //         const url = "https://dummyjson.com/users";
    //         //fetch data 
    //         let response =  await fetch(url);
    //         // convert into json
    //         response = await response.json()
    //         // console.log(response.users);
    //         setUserData(response.users);
    //     }
    //     console.log(userData);

    //    useEffect(()=>{
    //         (async () => {
    //             await getUserData();
    //         })();
    //     }
    //     ,[]);


    //     return(
    //         <>
    //         <h2>Get Data from Api With GET Method</h2>
    //         {userData && userData.map((user,key)=>(
    //            <ul key={key}>
    //             <li >{user.firstName}</li>
    //             <li >{user.lastName}</li>
    //             <li >Age :{user.age}</li>
    //            </ul>
    //         ))}
    //         </>
    //     )
    const [userData, setuserData] = useState([])
    async function getuserData() {
        const url = "https://dummyjson.com/users";
        let response = await fetch(url);
        response = await response.json();
        setuserData(response.users)

    }
    // useEffect(() => {
    //     (async () => {
    //         await getuserData();
    //     })();
    // }, []);

    useEffect(()=>{
        (
            async ()=>{
                await getuserData();
            }
        )();
    },[])

    return (
        <> 
            <h2>Get Data from Api With GET Method</h2>
            {userData && userData.map((user, key) => (
                <ul key={key}>
                    <li >{user.firstName}</li>
                    <li >{user.lastName}</li>
                    <li >Age :{user.age}</li>
                </ul>
            ))}
        </>
    )
}