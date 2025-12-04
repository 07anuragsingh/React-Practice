export default function ForwardREf({h1Handler,h1Handler2,hideShow,toggle,H1Ref2,H1Ref}){
    return(
        <>
        {toggle ? <div><h1 ref={H1Ref}>Showing UseRef()</h1>
                    <button onClick={h1Handler}>H1 Handler</button></div> : null}
                <hr />
                <button onClick={hideShow} >Hide and Show</button>

                {toggle && <div><h1 ref={H1Ref2}>Showing UseRef()</h1>
                <button onClick={h1Handler2}>H1 Handler</button></div>}
        </>
    )
}