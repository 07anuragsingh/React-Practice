import { useState } from "react"

export default function UpdateArray() {
    const [lastname, setlastname] = useState(['anil', 'anurag', 'aman'])
    const handlelastname = (lastname) => {
        setlastname((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = lastname;
            return copy // explicitly returning bexoz of {}
        }
        )
    }

    const [lastobjage, setlastobjage] = useState([
        { name: "Anurag", age: 34 },
        { name: "Aman", age: 45 },
        { name: "Alok", age: 35 },
    ])
    const handlelastage = (age) => {
        setlastobjage((prev) => {
            const objcopy = prev.map((obj, index) => {
                if (index === lastobjage.length - 1) {
                    return { ...obj, age: age } // new object
                }
                return obj;// old object(unchanged)
            });
            return objcopy;

        })


        // // setlastobjage((prev)=>{
        //     const objcopy=[...prev];
        //     objcopy[objcopy.length -1].age =age;
        //     return objcopy; // object mutated ho raha hai. (previous claas me pdhe the)
        // })


    }
    return (
        <>
            <input type="text" placeholder="Enter last name" onChange={(event) => (handlelastname(event.target.value))}></input>
            {lastname.map((items, index) => (
                <h4 key={index}>{items}</h4>
            ))}
            <hr />
            <input type="text" placeholder="Enter last age" onChange={(event) => (handlelastage(Number(event.target.value)))}></input>
            {
                lastobjage.map((Object, index) => (
                    <h4 key={index}>{Object.name},{Object.age}</h4>
                ))
            }

        </>
    )
}