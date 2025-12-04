import { useState } from 'react'
import styled from 'styled-components'
// M1
const Heading = styled.h1`
    color:red;
    border:2px solid green;
    border-radius:5px;
    text-align:center
    `

// M2
const Button = styled.button(({$active}) => ({
    color: "green",
    width: "54px",
    border: "1px solid black",
    borderRadius: "3px",
    margin: "20px",
    padding: "3px",
    backgroundColor: $active ? "red" : "white"
}))


export default function StyledComponent() {
    const [isactive, SeTactive] = useState(false)

    return (
        <>
            <Heading>This is the beauty of Styled Component</Heading>
            <Button>Login</Button>
            <Button $active={isactive} onClick={() => (SeTactive(!isactive))}>singup</Button>

        </>
    )
}