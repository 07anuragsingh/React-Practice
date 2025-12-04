import { useState } from "react"

export default function UpdateObject() {
    const [obj, setobj] = useState({
        name: "anurag",
        address: {
            city: "Dhanbad",
            Country: "India",
            Street: {
                streetname: "Matkuria",
                code: 826001
            }
        }
    })
    // const handleName =(val)=>{
    //     obj.name=val     WRONG METHOD
    //     // setobj({name:val}) code far dega
    //     // setobj(obj.name=val)
    //     setobj({...obj})
    // }
    const handleName = (val) => {
        setobj((prev) => ({ ...prev, name: val })); // auto matically return becox of ()
    }

    // const handleCity =(city)=>{
    //     obj.address.city=city    WRONG METHOD
    //     setobj({ ...obj, address: { ...obj.address, city } })
    // }
    const handleCity = (city) => {
        setobj((prev) => ({
            ...prev,
            address: { ...prev.address, city: city }
        }));
    }

    const handleStreet = (streetname) => {
        setobj((prev) => ({
            ...prev,
            address: { ...prev.address, Street: { ...prev.address.Street, streetname: streetname } }
        }));
    }

    const handleCountry = (Country) => {
        setobj((prev) => ({
            ...prev,
            address: { ...prev.address, Country: Country }
        }));
    }
    return (
        <>
            <input onChange={(event) => handleName(event.target.value)} placeholder="enter your name"></input>
            <input onChange={(event) => handleCity(event.target.value)} placeholder="enter your city"></input>
            <input onChange={(event) => handleCountry(event.target.value)} placeholder="enter your Country"></input>
            <input onChange={(event) => handleStreet(event.target.value)} placeholder="enter your Strret"></input>
            <h3>Name : {obj.name}</h3>
            <h3>city:{obj.address.city}</h3>
            <h3>Country:{obj.address.Country}</h3>
            <h3>Country:{obj.address.Street.streetname}</h3>
        </>
    )
}