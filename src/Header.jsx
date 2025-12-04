
function Header(){
    return(
        <>
            <h1>Welcome to My React App</h1>
            {sum()}
        </>
    )
}

export function Compo(){
    return(
        <div>hello i am a component</div>
    )
}

function sum(){
    return 12 +45;
}


export default Header;