import { useState, useContext } from "react";
import "../../../styles/AboutPage.css";
import NavAbout from "../../../components/NavAbout";
import General from "./submenus/general";
import Experience from "./submenus/experience";
import Skills from "./submenus/skills";
import Contact from "./submenus/contact";
import { AppContext } from "../../../utils/AppContext";

import { MdBorderAll, MdAreaChart } from "react-icons/md";
import { RiContactsFill, RiCodeSSlashFill } from "react-icons/ri";

export default function AboutPage() {
  const { language } = useContext(AppContext);
  const [activeMenu, setActiveMenu] = useState(0);
  let menuList;
  if (language === "pt") {
    menuList = ["Geral", "Experiência", "Contato", "Habilidades"];
  } else {
    menuList = ["General", "Experience", "Contact", "Skills"];
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

            <div
              className="left-nav-container"
              onClick={() => setActiveMenu(1)}>
              <div
                className={
                  activeMenu === 1 ? "left-nav left-nav-active" : "left-nav"
                }>
                <MdAreaChart className="left-mobile-icon" />
              </div>
              <div className="bottom-separator"></div>
            </div>

            <div
              className="left-nav-container"
              onClick={() => setActiveMenu(2)}>
              <div
                className={
                  activeMenu === 2 ? "left-nav left-nav-active" : "left-nav"
                }>
                <RiContactsFill className="left-mobile-icon" />
              </div>
              <div className="bottom-separator"></div>
            </div>

            <div
              className="left-nav-container"
              onClick={() => setActiveMenu(3)}>
              <div
                className={
                  activeMenu === 3 ? "left-nav left-nav-active" : "left-nav"
                }>
                <RiCodeSSlashFill className="left-mobile-icon" />
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
            <>
              {activeMenu === 1 ? (
                <Experience />
              ) : (
                <>
                  {activeMenu === 2 ? (
                    <Contact />
                  ) : (
                    <>
                      {activeMenu === 3 ? (
                        <Skills />
                      ) : (
                        <div className="about-div-text">
                          {menuList[activeMenu]}
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
