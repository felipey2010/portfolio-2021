import { useState, useEffect } from "react";

export default function Time() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);
  //   const [location, setLocation] = useState(new Date().)
  //   console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

  function getCurrentTime() {
    let date = new Date();
    let hr = date.getUTCHours();
    let min = date.getUTCMinutes();
    setSeconds(date.getUTCSeconds());

    if (hr.toString().length === 1) {
      let aux = "0" + hr;
      setHour(aux);
    } else {
      setHour(hr);
    }

    if (min.toString().length === 1) {
      let aux = "0" + min;
      setMinute(aux);
    } else {
      setMinute(min);
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getCurrentTime();
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [seconds]);

  return (
    <div className="time-container">
      <p className="time-hours">{hour}h:</p>
      <p className="time-minutes">{minute}m</p>
    </div>
  );
}
