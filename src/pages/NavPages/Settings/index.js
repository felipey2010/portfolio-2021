import { useState, useContext } from "react";
import "../../../styles/SettingsPage.css";
import General from "./submenus/general";
import NavAbout from "../../../components/NavAbout";
import { AppContext } from "../../../utils/AppContext";

import { MdBorderAll } from "react-icons/md";

export default function SettingsPage() {
  const [activeMenu, setActiveMenu] = useState(0);
  const { language } = useContext(AppContext);

  let menuList;
  if (language === "pt") {
    menuList = ["Geral"];
  } else {
    menuList = ["General"];
  }

  return (
    <div className="main-page-container">
      <div className="inner-main-container">
        <div className="left-page-container">
          {/* For big screens */}
          <div className="left-page-desktop">
            {menuList.map((list, index) => {
              return (
                <div
                  className="left-nav-container"
                  key={index}
                  onClick={() => setActiveMenu(index)}>
                  <div
                    className={
                      index === activeMenu
                        ? "left-nav left-nav-active"
                        : "left-nav"
                    }>
                    <NavAbout name={list} index={index} menu={activeMenu} />
                  </div>
                  <div className="bottom-separator"></div>
                </div>
              );
            })}
          </div>

          {/* For mobile screens */}
          <div className="left-page-mobile">
            <div
              className="left-nav-container"
              onClick={() => setActiveMenu(0)}>
              <div
                className={
                  activeMenu === 0 ? "left-nav left-nav-active" : "left-nav"
                }>
                <MdBorderAll className="left-mobile-icon" />
              </div>
              <div className="bottom-separator"></div>
            </div>
          </div>
        </div>

        {/* Inner right container */}
        <div className="right-page-container">
          {activeMenu === 0 ? (
            <General />
          ) : (
            <div className="about-div-text">{menuList[activeMenu]}</div>
          )}
        </div>
      </div>
    </div>
  );
}
