import { useState } from "react";
import "../../../styles/SettingsPage.css";
import General from "./submenus/general";
import Construction from "../../../components/construction";
import NavAbout from "../../../components/NavAbout";

export default function SettingsPage() {
  const [activeMenu, setActiveMenu] = useState(0);
  const menuList = ["General", "Others"];
  return (
    <div className="main-page-container">
      <div className="inner-main-container">
        <div className="left-page-container">
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
        <div className="right-page-container">
          {activeMenu === 0 ? (
            <General />
          ) : (
            <>
              {activeMenu === 1 ? (
                <Construction />
              ) : (
                <div className="about-div-text">{menuList[activeMenu]}</div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
