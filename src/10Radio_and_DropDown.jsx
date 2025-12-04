import { useState } from "react";

function RadioBnt() {
    const [gender, Setgender] = useState()
    return (
        <>
            <h3> selectd Gender :{gender}</h3>
            <input type="radio" name="gender" value="male" checked={gender == "male"} id="male" onChange={(event) => { Setgender(event.target.value) }} />
            <label htmlFor="male">Male</label>

            <input type="radio" name="gender" value="female" id="female" checked={gender == "female"} onChange={(event) => { Setgender(event.target.value) }} />
            <label htmlFor="female">Female</label>
        </>
    )
}
function DropDwon() {
    const [city, setCity] = useState('Dhanbad')
    return (
        <>
            <h3> selectd Gender :{city}</h3>
            <select  defaultValue="Dhanbad" onChange={(event)=>{setCity(event.target.value)}} >
                <option value="Noida" >Noida</option>
                <option value="Delhi" >Delhi</option>
                <option value="Dhanbad" >Dhanbad</option>
                <option value="Ranchi" >Ranchi</option>
                <option value="Kolkata" >Kolkata</option>
            </select>
        </>
    )
}

export { RadioBnt, DropDwon };