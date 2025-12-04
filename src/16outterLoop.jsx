import Students from "./17InnerLoop"

export default function College({ collgeObj }) {
    console.log(collgeObj)
    return (
        <>
            <div style={{
                backgroundColor: "#ccc",
                padding: "20px",
                margin: "20px",
                borderBottom: "2px solid #000",
                borderRadius: "10px",
            }}
            >
                <h4>Name: {collgeObj.name}</h4>
                <ul>
                    <li>website: {collgeObj.website}</li>
                    <li>state: {collgeObj.state}</li>
                    <li><Students students ={collgeObj.student}/> </li>
                    
                </ul>
            </div>
        </>
    )
}