import { useTransition } from "react"

export default function  UseTransition(){
    const [pending,startTransition] = useTransition();
    const handleClick=()=>{
        startTransition(async()=>{
            await new Promise((resolve) => {
                setTimeout(resolve,5000);
            })
        })
    }
    return(
        <>
        {
            pending?
            <img src="https://assets-v2.lottiefiles.com/a/91ccdf52-1150-11ee-b7cc-8f23ce57c5d5/3b61VveWDX.gif" style={{height:"100px",width:"100px"}}></img>
            :null
        }
        <button disabled={pending} onClick={handleClick}>Click</button>
        </>
    )
}