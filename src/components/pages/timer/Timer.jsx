import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(3);
  const [displayMessage, setDisplayMessage] = useState(false);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  // function skip() {
  //   if (displayMessage === false) {
  //     setSeconds(0);
  //     setMinutes(5);
  //     setDisplayMessage(true);
  //   } else {
  //     setSeconds(59);
  //     setMinutes(24);
  //     setDisplayMessage(false);
  //   }
  // }
  return (
    <div className="timer">
      <div className="timerTitle">Pomodoro Timer</div>
      <div className="message">
        {displayMessage && <div>Break time! New session starts in: </div>}
      </div>
      <div className="timerBody">
        {timerMinutes}: {timerSeconds}
      </div>
      <div className="skip">{/* <button onClick={skip}>Skip</button> */}</div>
    </div>
  );
}

export default Timer;
