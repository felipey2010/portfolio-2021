import { useContext } from "react";
import Translation from "../utils/Translation.json";
import Page404 from "../images/Page404.png";
import { AppContext } from "../utils/AppContext";

export default function Construction() {
  const { language } = useContext(AppContext);
  return (
    <div className="construction-container">
      <div className="construction-inner-container">
        <div className="construction-image-container">
          <img
            src={Page404}
            alt="in construction"
            className="construction-image"
          />
        </div>
        <div className="construction-text-container">
          <h3 className="construction-text">{Translation[18][language]}</h3>
        </div>
      </div>
    </div>
  );
}
