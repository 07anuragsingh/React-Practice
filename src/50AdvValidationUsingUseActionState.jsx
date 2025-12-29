import { useActionState } from 'react';
import './App.css'

function AdvValidation() {

    const handleLogin = async(previous, formdata) => {
        const name = formdata.get('name');
        const password = formdata.get('password');
        const regex = /^[A-Z0-9]+$/i
        // console.log("called");
        await new Promise((resolve,) => {
            setTimeout(resolve,2000)
        })
        if (!name || name.length > 7) {
            return { error: "Name should be less than 6 char", name, password }
        } else if (!password || !regex.test(password)) {
            return { error: "No special Char is allowed", name, password }
        }
        else {
            return { message: "Login Done", name, password }
        }

    }
    const [data, action, pending] = useActionState(handleLogin);
    console.log(data);
    return (
        <div>
            <h1>Validation with useActionState in React</h1>
            {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
            {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
            <form action={action}>
                <input defaultValue={data?.name} type="text" name="name" placeholder='enter user name' />
                <br /><br />
                <input defaultValue={data?.password} type="text" name="password" placeholder='enter user password' />
                <br /><br />
                <button disabled={pending}>Login</button>
            </form>
        </div>

    );
}

export default AdvValidation;