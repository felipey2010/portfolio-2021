import "../../../styles/ServicesPage.css";
import { useContext } from "react";
import { AppContext } from "../../../utils/AppContext";
import Translation from "../../../utils/Translation.json";

export default function ServicesPage() {
  const { language } = useContext(AppContext);

  return (
    <div className="services-page-container">{Translation[38][language]}</div>
  );
}
