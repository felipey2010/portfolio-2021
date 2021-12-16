import "../../../styles/VisitorPage.css";
import { useContext } from "react";
import { AppContext } from "../../../utils/AppContext";
import Translation from "../../../utils/Translation.json";

export default function VisitorPage() {
  const { language } = useContext(AppContext);

  return (
    <div className="visitor-page-container">{Translation[39][language]}</div>
  );
}
