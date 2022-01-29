import { useContext, useEffect, useState } from "react";
import Translation from "../utils/Translation.json";
import "../styles/Footer.css";
import { AppContext } from "../utils/AppContext";

export default function Footer() {
  const { language } = useContext(AppContext);
  const [date, setDate] = useState("00/00/0000");

  function getCurrentDate() {
    let currentDate = new Date().toLocaleDateString();
    setDate(currentDate);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getCurrentDate();
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [date]);

  return (
    <div className="footer-container">
      <p className="footer-p">
        {Translation[17][language]}
        {date}
      </p>
    </div>
  );
}
