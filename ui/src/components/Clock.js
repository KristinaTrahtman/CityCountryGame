import React from "react";
import { useState, useEffect } from "react";
import reloadPage from "../utils/reload";

/*
Clock is a child of GameAggregator. 
The timer starts only when the initial seconds is set to higher value than zero. 
*/

const Clock = (props) => {
  const { initialSeconds = 0, resetTime = false } = props;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [clockStarted, setClockStarted] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setClockStarted(true);
      }
      if (seconds === 0) {
        if (clockStarted) {
          reloadPage();
          alert("Time ran out!!!!");
        }
        clearInterval(myInterval);
      }
      if (reset !== resetTime) {
        setReset(resetTime);
        setSeconds(initialSeconds);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      <h1 className="timer">Time left to play: 00:{`0${seconds}`.slice(-2)}</h1>
    </div>
  );
};

export default Clock;
