import React, { useEffect, useState } from "react";
import CountdownCircle from "../countdownCircle/CountdownCircle";
import styles from './Countdown.module.css'

function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2022-11-01T00:00:00-05:00") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className={`row gx-3 ${styles.circleContainer}`}>
      <div className="col-3">
        <CountdownCircle time={timeLeft.days} title="DÍAS"/>
      </div>
      <div className="col-3">
        <CountdownCircle time={timeLeft.hours} title="HRS"/>
      </div>
      <div className="col-3">
        <CountdownCircle time={timeLeft.minutes} title="MIN"/>
      </div>
      <div className="col-3">
        <CountdownCircle time={timeLeft.seconds} title="SEG"/>
      </div>
    </div>
  );
}

export default Countdown;
