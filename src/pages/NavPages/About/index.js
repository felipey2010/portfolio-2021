import { useState, useContext } from "react";
import "../../../styles/AboutPage.css";
import NavAbout from "../../../components/NavAbout";
import General from "./submenus/general";
import Experience from "./submenus/experience";
import Skills from "./submenus/skills";
import Contact from "./submenus/contact";
import Construction from "../../../components/construction";
import { AppContext } from "../../../utils/AppContext";

export default function AboutPage() {
  const { language } = useContext(AppContext);
  const [activeMenu, setActiveMenu] = useState(0);
  let menuList;
  if (language === "pt") {
    menuList = ["Geral", "Experiência", "Contato", "Habilidades", "Outros"];
  } else {
    menuList = ["General", "Experience", "Contact", "Skills", "Others"];
  }

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
                        <>
                          {activeMenu === 4 ? (
                            <Construction />
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
