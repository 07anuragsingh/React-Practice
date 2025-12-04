export default function ReuseCompo({data}){
    console.log(data)
    
    return(
        <>
        <div style={{border :"2px solid green" ,borderRadius :"5px",width :"300px" , margin :"10px"}}>
           <h3>Id:{data.id}</h3> 
            <h3>Name :{data.name}</h3> 
           <h3> Age :{data.age}</h3> 
            <h3>Gender :{data.gender}</h3> 
        </div>

        </>
    )
}