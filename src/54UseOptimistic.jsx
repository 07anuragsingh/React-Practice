import axios from "axios"
import { useEffect, useOptimistic, useState } from "react";



export default function UseOptimistic() {
    const [user, setUser] = useState([]);
    const [optiuser, addOptiuser] = useOptimistic(user);

    const [newuser, setnewuser] = useState('');
    async function delay(ms) {
        await new Promise((resolve) => setTimeout(resolve, ms))
    }

    const addUser = async () => {


        if (!newuser.trim()) return;
        addOptiuser((prev) => [...prev, { name: newuser }])

        try {
            const res = await axios.post('http://localhost:3000/user', {
                name: newuser
            });
            console.log(res.data);

            await delay(3000)
            if (res) {
                // getData();
                // ✅ update real state to match optimistic state
                setUser(prev => [...prev, res.data]);
                setnewuser('');
            }

        } catch (error) {
            console.log(error);
            getData()// rollback if server response fail

        }

    }

    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/user');
            let data = res.data;
            console.log(data);
            setUser(data);
        }
        catch (error) {
            console.log(error)
        }


    }
    useEffect(() => {
        (
            async () => {
                getData();
            }
        )();
    }, [])


    return (
        <>
            <h1>useOptimistic in React 19 </h1>
            <form action={addUser}>
                <input value={newuser} onChange={(e) => setnewuser(e.target.value)}></input>
                <button >ADD</button>
            </form>
            {
                optiuser?.map((user) => (
                    <h3 key={user.id}>{user.name}</h3>
                ))

            }
        </>
    )
}