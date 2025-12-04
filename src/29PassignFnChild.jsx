export default function PassFnChildCompo({displayName,name}){
    
    return(
        <>
        <div><button onClick={()=>displayName(name)}>Display Name</button></div>
        </>
    )
}