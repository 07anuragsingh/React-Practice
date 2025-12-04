import { useRef, useState } from "react"

export default function StopWatch() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)
    function start() {
        if (intervalRef.current !== null) return; // prevent multiple intervals
        intervalRef.current = setInterval(() => {
            setTimer((prev) => prev + 10)
        }, 10);

    }
    function stop() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
    function reset() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTimer(0);
    }
    return (
        <>
            <h3 style={{ width: "195px", border: "1px solid green", borderRadius: "5px", padding: "5px" , backgroundColor:"lightpink"}}>⏱ Stopwatch:
                {String(Math.floor(timer / 60000)).padStart(2, "0")}:
                {String(Math.floor((timer % 60000) / 1000)).padStart(2, "0")}:
                {String(Math.floor((timer % 1000))).padStart(3, "0")}
            </h3>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}