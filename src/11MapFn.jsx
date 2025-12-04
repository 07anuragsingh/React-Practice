

import ReuseCompo from "./12ReuseComponentUsingMapFn";
export default function MapFn() {
    const userData = [
        {
            name: "anuarg",
            age: 23,
            gender: "Male",
            id: 0o1
        },
        {
            name: "Aman",
            age: 23,
            gender: "Male",
            id: 0o2
        },
        {
            name: "Rajuv",
            age: 45,
            gender: "Male",
            id: 0o3
        },
        {
            name: "Raju",
            age: 23,
            gender: "Male",
            id: 0o4
        },
        {
            name: "Harry",
            age: 33,
            gender: "Male",
            id: 0o5
        },
        {
            name: "Alexa",
            age: 13,
            gender: "Female",
            id: 0o6
        }
    ]
    return (
        <>
            <h2>Map Function in JSX</h2>
            <table border={1}>
                <thead >
                    <tr >
                        <td >Id</td>
                        <td>Name</td>
                        <td>Gender</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.gender}</td>
                                <td>{user.age}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>


            {/* Reuse Componet using Map fn */}
            {
                userData.map((user)=>{
                    return(
                    <div key={user.id}> 
                    <ReuseCompo data = {user}/>
                    </div>)
                })
            }
        </>
    )
}