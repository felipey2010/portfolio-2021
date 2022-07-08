import { useContext, useEffect, useState } from "react";
import Translation from "../utils/Translation.json";
import "../styles/Footer.css";
import { AppContext } from "../utils/AppContext";

export default function Footer() {
  const { language } = useContext(AppContext);
  const [day, setDay] = useState("00");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");

  function getCurrentDate() {
    // let currentDate = new Date().toLocaleDateString();
    let date = new Date();

    setDay(date.getDate());
    setMonth(date.getMonth() + 1);
    setYear(date.getFullYear());
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getCurrentDate();
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [day]);

  return (
    <div className="footer-container">
      <p className="footer-p">
        {Translation[17][language]}
        <>{day.toString().padStart(2, "0")}</>/
        <>{month.toString().padStart(2, "0")}</>/{year}
      </p>
    </div>
  );
}
