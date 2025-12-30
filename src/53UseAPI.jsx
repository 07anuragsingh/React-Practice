import { Suspense,use } from "react";

const fetchData=()=>fetch('https://dummyjson.com/users').then((response)=>response.json());
const userResource= fetchData();
export default function UseApi(){
    return(
        <>
        <h2>Use Api in React</h2>
        <Suspense fallback={<p>Loading..</p>}>
        <Userlist userResource={userResource}/>
        </Suspense>
        </>
    )
}
const Userlist =({userResource})=>{
    const userdata = use(userResource);
    return(
        <>
        <h3>Hello Users</h3>
        {userdata?.users?.map((user)=>(
            <h3>{user.firstName}</h3>
        ))
        }
        </>
    )
}