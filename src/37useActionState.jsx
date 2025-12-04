import { useActionState } from "react"

export default function UseAction() {
    const handleSubmit = async (prevdata, formdata) => {
        let name = formdata.get('name');
        let password = formdata.get('password');
        await new Promise((resolve) => {
            setTimeout(resolve, 2000)
        })
        // console.log("handlesubmit is called",name,password);
        if (name && password) {
            return { message: 'Data Submitted', name, password }
        }
        else {
            return { error: 'Data not Submitted', name, password }
        }
    }
    const [state, action, pending] = useActionState(handleSubmit, undefined)

    return (
        <>
            <form action={action}>
                <input type="text" placeholder="Enter your name" name="name"></input>
                <input type="password" placeholder="Enter your password" name="password"></input>
                <button disabled={pending}>Submit</button>
            </form>
            <br>
            </br>
            {
                state?.error && <span style={{ color: 'red' }}>{state?.error}</span>
            }
            {
                state?.message && <span style={{ color: 'green' }}>{state?.message}</span>
            }
            <hr></hr>
            <h3>name:{state?.name}</h3>
            <h3>password:{state?.password}</h3>
        </>



    )
}