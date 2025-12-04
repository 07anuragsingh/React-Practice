import PassFnChildCompo from "./29PassignFnChild"
export default function PassFn() {
    const displayName = (name) => {
        alert(name)
    }

    return (
        <>
            <h2> Calling Parent Function from child Component</h2>
            <PassFnChildCompo displayName={displayName} name={"anurag"}/>
            <PassFnChildCompo displayName={displayName} name={"Anshu"}/>
            <PassFnChildCompo displayName={displayName} name={"Anam"}/>
            <PassFnChildCompo displayName={displayName} name={"Ram"}/>
        </>
    )
}