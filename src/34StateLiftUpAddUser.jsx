

// Main cahata hoon ki AddUser wale component se State ka value Display User wale component me jake via App,jsx
export default function AddUser({Setuser,handleClick}){
   
    return(
        <>
        <h3>Add User</h3>
        <input type="text" onChange={(event)=>Setuser(event.target.value)}></input>
        <button onClick={handleClick} >Display</button>
        <hr />
        </>
    )
}