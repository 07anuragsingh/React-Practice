import axios from "axios";
import { useEffect } from "react";


export default function AxiosApi() {

    const baseURL = "https://dummyjson.com/users";
    const getData = async () => {
        try {
            const resposne = await axios.get(baseURL);
            console.log(resposne.data);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <h2>AXIOS API</h2>
        </>
    )
}

// get Method
