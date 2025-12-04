import {useFormStatus} from 'react-dom' // For form submitting
export default function SubmitForm() {
    const handleSubmit = async () => {
        await new Promise((res) => (setTimeout(res, 4000)));
        console.log("Submitted")
    }

    function FormCompo() {
         const {pending,data,method} =useFormStatus();
         console.log(pending,data,method);

        return (
            <div>
                <input type="text" placeholder="Enter your name"></input>
                <br></br>
                <br></br>
                <input type="password" placeholder="Enter your password"></input>
                <br />
                <br />
                <button disabled={pending}>{pending?"Submitting...":"Submit"}</button>
            </div>
        )
    }
    return (
        <>
            <h3>useFromStatus Hook for Submit button</h3>
            <form action={handleSubmit}>
                <FormCompo />
            </form>
        </>
    )
}