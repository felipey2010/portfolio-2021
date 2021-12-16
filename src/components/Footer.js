import { useContext } from "react";
import Translation from "../utils/Translation.json";
import "../styles/Footer.css";
import { AppContext } from "../utils/AppContext";

export default function Footer() {
  const { language } = useContext(AppContext);

  return (
    <div className="footer-container">
      <p className="footer-p">{Translation[17][language]}</p>
    </div>
  );
}
