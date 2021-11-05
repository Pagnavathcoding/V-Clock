import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import WorldClock from './Components/WorldClock';
import StopWatch from './Components/StopWatch';
import Timer from './Components/Timer';
export const Context = createContext(null);
function App() {
  const [secondStopWatch, setSecondStopWatch] = useState(0);
  const [minuteTimer, setMinuteTimer] = useState(1);
  return (
    <Router>
      <main>
        <header>
          <div onClick={() => {
            window.location.pathname = "/";
          }} title="V Clock made by Pagnavath" className="logo" style={{ boxShadow: "0 2px 5px 0 rgb(0 0 0 / 50%)" }}>
            <h1>V Clock</h1>
          </div>
          <div className="menu">
            <ul>
              <li><NavLink exact="true" activeclassname="active" to="/" style={{ boxShadow: "0 2px 5px 0 rgb(0 0 0 / 50%)" }}>World Clock</NavLink></li>
              <li><NavLink exact="true" activeclassname="active" to="/stopwatch" style={{ boxShadow: "0 2px 5px 0 rgb(0 0 0 / 50%)" }}>Stopwatch</NavLink></li>
              <li><NavLink exact="true" activeclassname="active" to="/timer" style={{ boxShadow: "0 2px 5px 0 rgb(0 0 0 / 50%)" }}>Timer</NavLink></li>
            </ul>
          </div>
        </header>
        <Context.Provider value={{ secondStopWatch, setSecondStopWatch, minuteTimer, setMinuteTimer }}>
          <Routes>
            <Route path="/" exact="true" element={<WorldClock />} />
            <Route path="/stopwatch" element={<StopWatch />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </Context.Provider>
      </main>
    </Router>
  )
}
export default App;