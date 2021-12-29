import { useContext } from "react";
import ".././styles/navbar.css";
import { NavLink } from "react-router-dom";
import { IoHome, IoSettings } from "react-icons/io5";
import { FaCoffee } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import Translation from "../utils/Translation.json";
import { AppContext } from "../utils/AppContext";
import Time from "./Time";

export default function Navbar() {
  const { language } = useContext(AppContext);

  return (
    <div className="navbar-container">
      <div className="navbar-buttons-div">
        <div className="navbar-buttons-div-item"></div>
        <div className="navbar-buttons-div-item"></div>
        <div className="navbar-buttons-div-item"></div>
      </div>
      <div className="navlinks-div">
        <NavLink
          to="/"
          exact
          activeClassName="active-link"
          className="nav-link">
          <IoHome className="nav-icons" />
          <p className="nav-link-p">{Translation[0][language]}</p>
        </NavLink>
        <div className="separator"></div>

        <NavLink
          to="/about-me"
          exact
          activeClassName="active-link"
          className="nav-link">
          <BsInfoCircleFill className="nav-icons" />
          <p className="nav-link-p">{Translation[1][language]}</p>
        </NavLink>

        <div className="separator"></div>

        <NavLink
          to="/services"
          exact
          activeClassName="active-link"
          className="nav-link">
          <CgNotes className="nav-icons" />
          <p className="nav-link-p">{Translation[2][language]}</p>
        </NavLink>

        <div className="separator"></div>

        <NavLink
          to="/work"
          exact
          activeClassName="active-link"
          className="nav-link">
          <MdWork className="nav-icons" />
          <p className="nav-link-p">{Translation[3][language]}</p>
        </NavLink>

        <div className="separator"></div>

        <NavLink
          to="/settings"
          exact
          activeClassName="active-link"
          className="nav-link">
          <IoSettings className="nav-icons" />
          <p className="nav-link-p">{Translation[4][language]}</p>
        </NavLink>

        <div className="separator"></div>

        <NavLink
          to="/special"
          exact
          activeClassName="active-link"
          className="nav-link">
          <FaCoffee className="nav-icons" />
          <p className="nav-link-p">{Translation[5][language]}</p>
        </NavLink>
      </div>
      <Time />
    </div>
  );
}
