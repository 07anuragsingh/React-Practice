import { useEffect } from "react"

export default function Students({students}){
    console.log(students)
    return(
        <>
        {students.map((student,index)=>(
            <div key={index}>
                <ul>
                    <li>{student.name}</li>
                </ul>
            </div>
        ))}
        
        </>
    )
}

