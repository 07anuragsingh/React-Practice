import { useState } from "react"
import College from "./40College"
import { SubjectContext } from "./40ContextData"
export default function ContextProvider() {
    const [subject,setsubject] = useState('')
    return (
        <div style={{ backgroundColor: 'yellow', padding: 10 }}>
            <SubjectContext.Provider value={subject}>
                <select value={subject} onChange={(event)=>setsubject(event.target.value)}>
                    <option value="">Select Subject</option>
                    <option value={"Maths"}>Maths</option>
                    <option value={"English"}>English</option>
                    <option value={"SCIEnce"}>SCIEnce</option>
                </select>
                <button onClick={()=>setsubject('')} >Clear Subject</button>
                <h3>Context Subject</h3>
                <College />
            </SubjectContext.Provider>
        </div>
    )
}