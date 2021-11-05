import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../App';
function StopWatch() {
    const [toggle, setToggle] = useState(false);
    let { secondStopWatch, setSecondStopWatch } = useContext(Context);
    useEffect(() => {
        let interval = null;
        if (toggle) {
            interval = setInterval(() => {
                setSecondStopWatch(secondStopWatch += 1);
            }, 1000);
        }
        else {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [toggle, secondStopWatch]);
    let hours = Math.floor(secondStopWatch / 3600);
    let minutes = Math.floor((secondStopWatch - (hours * 3600)) / 60);
    let seconds = secondStopWatch - (hours * 3600) - (minutes * 60);
    return (
        <section className="stopWatch">
            <p id="stop-watch-title">Stopwatch</p>
            <h1>{hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1>
            <div className="btn">
                <button onClick={() => setToggle(!toggle)} style={{ boxShadow: "0 2px 5px 0 rgb(0 0 0 / 50%)", background: !toggle ? "#626ee3" : "#02203c" }}>{!toggle ? "Start" : "Stop"}</button>
                <button style={{ boxShadow: "0 2px 5px 0 rgb(0 0 0 / 50%)" }} onClick={() => {
                    setSecondStopWatch(0);
                    setToggle(false);
                }}>Reset</button>
            </div>
        </section>
    )
}
export default StopWatch;