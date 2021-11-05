import React, { useEffect, useState, useContext } from 'react';
import sound from '../sound.mp3';
function Timer() {
    const alert = new Audio(sound);
    let [min, setMin] = useState(1);
    let [sec, setSec] = useState(1);
    const [show, setShow] = useState(false);
    useEffect(() => {
        setSec(min * 60)
    }, [min])
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        let interval = null;
        if (toggle) {
            interval = setInterval(() => {
                setSec(sec -= 1);
                if (sec === 0) {
                    setToggle(false);
                    alert.play();
                    alert.loop = true;
                    setShow(!show);
                }
            }, 1000)
        }
        else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [toggle, min])
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    let seconds = sec - (hours * 3600) - (minutes * 60);
    return (
        <section className="timer">
            <div className="alert" style={{ display: !show ? "none" : "flex" }}>
                <h1>TIME'S UP!</h1>
                <button onClick={() => {
                    window.location.pathname = "/timer";
                }}>Okay</button>
            </div>
            <p id="timer-title">Timer</p>
            <h1>{hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1>
            <div className="minute">
                <p>Minutes</p>
                <input type="number" style={{ boxShadow: "0 2px 5px 0 rgb(0 0 0 / 50%)", border: min < 1 || min > 1440 ? "0.1em solid #d13434" : "unset" }} value={min} onChange={e => setMin(e.target.value)} onInput={() => {
                    setToggle(false);
                    setMin(1);
                    setSec(min * 60);
                }} />
            </div>
            <div className="btn">
                <button style={{ boxShadow: "0 2px 5px 0 rgb(0 0 0 / 50%)", display: min < 1 || min > 1440 ? "none" : "block" }} onClick={() => {
                    setToggle(!toggle)
                }}>{!toggle ? "Start" : "Stop"}</button>
                <button style={{ boxShadow: "0 2px 5px 0 rgb(0 0 0 / 50%)" }} onClick={() => {
                    setToggle(false);
                    setMin(1);
                    setSec(min * 60);
                }
                }>Reset</button>
            </div>
        </section >
    )
}
export default Timer;