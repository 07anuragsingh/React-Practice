import axios from "axios";
import { useEffect, useState } from "react";

//🔥 Fetch me .json() ke baad direct data milta hai
//🔥 Axios me JSON data property ke andar hota hai

export default function AxiosApi() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);



    const baseURL = "https://dummyjson.com/users";
    const getData = async () => {
        try {
            const resposne = await axios.get(baseURL);
            console.log(resposne.data.users);
            setUserData(resposne.data.users);
            

        } catch (error) {
            console.log(error);
        }finally{
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
    }, [])

    return (
        <>
            <h2>AXIOS API</h2>
            { !loading ? 
                userData && userData.map((user) => (
                    <div style={{ margin: "10px" }} key={user.id}>
                        <h4>{user.id}</h4>
                        <h4>{user.firstName}</h4>
                        <hr /><hr />
                    </div>
                ))
                : <h3>Loading Data from API</h3>
            }
        </>
    )
}

// get Method
