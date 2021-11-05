import React, { useState, useEffect } from 'react';

function WorldClock() {
    const get = new Date();
    let day = get.getDay();
    const date = get.getDate();
    let month = get.getMonth();
    const year = get.getFullYear();
    const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    switch (month) {
        case 0:
            month = months[0];
            break;
        case 1:
            month = months[1]
            break;
        case 2:
            month = months[2]
            break;
        case 3:
            month = months[3]
            break;
        case 4:
            month = months[4]
            break;
        case 5:
            month = months[5]
            break;
        case 6:
            month = months[6]
            break;
        case 6:
            month = months[6]
            break;
        case 7:
            month = months[7]
            break;
        case 8:
            month = months[8]
            break;
        case 9:
            month = months[9]
            break;
        case 10:
            month = months[10]
            break;
        default:
            month = months[11];
            break;
    }
    switch (day) {
        case 0:
            day = days[0];
            break;
        case 1:
            day = days[1];
            break;
        case 2:
            day = days[2];
            break;
        case 3:
            day = days[3];
            break;
        case 4:
            day = days[4];
            break;
        case 5:
            day = days[5];
            break;
        default:
            day = days[6];
            break;
    }
    let hour = get.getHours();
    let minute = get.getMinutes();
    let second = get.getSeconds();
    let [counter, setCounter] = useState(0);
    setInterval(() => {
        setCounter(counter += 1)
    }, 1000)
    function worldClock() {
        let time = 'AM';
        if (hour > 12) {
            hour -= 12;
            time = 'PM'
        }
        let hours = hour < 10 ? "0" + hour : hour;
        let minutes = minute < 10 ? "0" + minute : minute;
        let seconds = second < 10 ? "0" + second : second;
        return `${hours}:${minutes}:${seconds} ${time}`
    }
    useEffect(() => {
        setTimeout(worldClock, 1000);
    }, [counter])
    return (
        <section className="worldClock">
            <p id="worldclock-title">World Clock</p>
            <h1>{worldClock()}</h1>
            <p>{day}, {month} {date}, {year}</p>
        </section>
    )
}
export default WorldClock;