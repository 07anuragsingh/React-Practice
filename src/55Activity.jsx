import { useState, Activity } from "react"

export default function ActivityExample() {
  const [showHome,setShowHome]=useState(true);
  return (
    <>
   <h1>Activity in React 19.2</h1>
   <button onClick={()=>setShowHome(true)}>Home</button>
   <button onClick={()=>setShowHome(false)}>User Form</button>
  <Activity mode={showHome?'visible':'hidden'} >
<Home />
  </Activity>

   <Activity mode={showHome==false?'visible':'hidden'} >
<UserFrom />
  </Activity>

    </>
  )
}

function Home(){
  return(
    <h1>Home Page</h1>
  )
}

function UserFrom(){
  return(
    <div>
      <h2>User Form</h2>
      <input type="text" placeholder="enter name" />
      <input type="text" placeholder="enter name" />
      <input type="text" placeholder="enter name" />
      <input type="text" placeholder="enter name" />

    </div>
  )
}

