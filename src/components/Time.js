import { useState, useEffect } from "react";
import { IoTimeOutline } from "react-icons/io5";
export default function Time() {
  const [time, setTime] = useState("00:00:00");

  function getCurrentTime() {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getCurrentTime();
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [time]);

  return (
    <div className="time-container">
      <IoTimeOutline />
      <p className="time">{time}</p>
    </div>
  );
}
