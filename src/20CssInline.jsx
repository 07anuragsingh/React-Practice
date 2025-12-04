import { useState } from "react";


export default function UserCard() {

    // for changing theme
    const [cardStyle, setCardStyle] = useState({
        border: "1px solid #ccc",
        width: "200px",
        boxShadow: "1px 2px 6px 0px #37101057",
        margin: "10px",
    })

    function UpdateTheme(bgColor, TxtColor) {
        setCardStyle({ ...cardStyle, backgroundColor: bgColor, color: TxtColor })
    }


    const textContainerStyle = {
        padding: "5px",
        color: "black"
    };


    // for Changing Text COlor
    const [textColor, setTextColor] = useState("black")
    function UpdatetextColor(col) {
        setTextColor(col)
    }


    //for Changing orientation
    const [grid, SetGrid] = useState(true)

    const imageStyle = {
        width: "200px",
    };



    return (
        <>

            <button onClick={() => (UpdateTheme('grey', 'green'))}> Grey Theme</button>
            <button onClick={() => (UpdateTheme('white', 'black'))}> Default Theme</button>

            <button onClick={() => (UpdatetextColor("red"))}>Change Textcolor</button>
            <button onClick={() => (UpdatetextColor("black"))}>default Textcolor</button>


            <button onClick={() => (SetGrid(!grid))}>Change Orientation</button>




            <div style={{
                display: grid ? "flex" : "block",
                flexWrap: "wrap"
            }}>
                <div style={cardStyle}>
                    <img style={imageStyle} src="https://tse3.mm.bing.net/th/id/OIP.JAAd31mxF33HqZEgYq9zgAHaHv?pid=Api&P=0&h=180" alt="" />
                    <div style={{ color: textColor }}>
                        <h4>Anil Sidhu</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={imageStyle} src="https://tse3.mm.bing.net/th/id/OIP.JAAd31mxF33HqZEgYq9zgAHaHv?pid=Api&P=0&h=180" alt="" />
                    <div style={textContainerStyle}>
                        <h4>Anil </h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={imageStyle} src="https://tse3.mm.bing.net/th/id/OIP.JAAd31mxF33HqZEgYq9zgAHaHv?pid=Api&P=0&h=180" alt="" />
                    <div style={textContainerStyle}>
                        <h4>Anil Singh</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <img style={imageStyle} src="https://tse3.mm.bing.net/th/id/OIP.JAAd31mxF33HqZEgYq9zgAHaHv?pid=Api&P=0&h=180" alt="" />
                    <div style={textContainerStyle}>
                        <h4>Anil Kumar</h4>
                        <p>Software Developer</p>
                    </div>
                </div>
            </div>
        </>
    )
}