import { useState } from "react";

export default function CheckboxHandle() {
    const [skills, setSkills] = useState([]);

    function handler(event) {
        const value = event.target.value;

        if (event.target.checked) {
            setSkills([...skills, value]);
        } else {
            setSkills(skills.filter(item => item !== value));
        }
    }

    return (
        <>
            <h2>Handle CheckBox - Choose Skills</h2>

            <input
                type="checkbox"
                id="html"
                value="Html"
                checked={skills.includes("Html")}
                onChange={handler}
            />
            <label htmlFor="html">Html</label><br />

            <input
                type="checkbox"
                id="css"
                value="Css"
                checked={skills.includes("Css")}
                onChange={handler}
            />
            <label htmlFor="css">Css</label><br />

            <input
                type="checkbox"
                id="JS"
                value="JS"
                checked={skills.includes("JS")}
                onChange={handler}
            />
            <label htmlFor="JS">JS</label><br />

            <input
                type="checkbox"
                id="react"
                value="React"
                checked={skills.includes("React")}
                onChange={handler}
            />
            <label htmlFor="react">React</label><br />

            <h3>Selected: {skills.toString()}</h3>
        </>
    );
}
