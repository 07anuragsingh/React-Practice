

export default function ChildrenProps({children,color="green"}){
    return(
        <>
        <div style={{color:color, border:"2px solid Black", padding:"2px", margin:"5px"}}>  {children}  </div>
        </>
    )
}