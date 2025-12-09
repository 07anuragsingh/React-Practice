import { useId } from "react"

export default function UseIdCompo() {


    return (
        <div>
            <UserForm />
            <hr />
            <UserForm />

        </div>
    )

}


function UserForm() {
    const user = useId();


    return (
        <div>
            <form action="">
                <label htmlFor={user + "name"}>Enter User Name</label>
                <input id={user + "name"} type="text" placeholder="enter name" />
                <br /><br />
                <label htmlFor={user + "password"}>Enter User password</label>
                <input id={user + "password"} type="text" placeholder="enter password" />
                <br /><br />
                <label htmlFor={user + "skills"}>Enter User Skills</label>
                <input id={user + "skills"} type="text" placeholder="enter skills" />

                <br /><br />
                <input id={user + "terms"} type="checkbox" placeholder="enter skills" />
                <label htmlFor={user + "terms"}>Terms and Condition</label>

            </form>

        </div>
    )

}
