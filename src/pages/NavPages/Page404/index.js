import "../../../styles/Page404.css";
import { useContext } from "react";
import { AppContext } from "../../../utils/AppContext";
import Translation from "../../../utils/Translation.json";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Page404() {
  const { language, getMenuName } = useContext(AppContext);

  return (
    <div className="inner-main-container">
      <div className="page-404-container">
        <p className="page-404-top-text-bold">{Translation[65][language]}</p>
        <p className="page-404-top-text-bold-2">{Translation[71][language]}</p>
        <div className="page-404-divider"></div>
        <p className="page-404-top-text-normal">{Translation[67][language]}</p>
        <p className="page-404-top-text-normal">{Translation[68][language]}</p>
        <p className="page-404-top-text-normal">{Translation[69][language]}</p>
        <p className="page-404-top-text-normal">{Translation[70][language]}</p>
        <div className="page-404-divider"></div>

        <Link to="/" className="page-404-link" onClick={() => getMenuName()}>
          <IoHome className="page-404-home" />
          <p className="page-404-home-link">{Translation[0][language]}</p>
        </Link>
      </div>
    </div>
  );
}
