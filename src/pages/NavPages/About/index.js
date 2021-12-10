import { useState } from "react";
import "../../../styles/AboutPage.css";
import NavAbout from "../../../components/NavAbout";
import General from "./submenus/general";
import Experience from "./submenus/experience";
import Skills from "./submenus/skills";
import Contact from "./submenus/contact";

// Use React reveal

export default function AboutPage() {
  const [activeMenu, setActiveMenu] = useState(0);
  const menuList = ["General", "Experience", "Contact", "Skills", "Others"];

  return (
    <div className="about-page-container">
      <div className="about-main-container">
        <div className="about-left-nav">
          {menuList.map((list, index) => {
            return (
              <div
                className="about-nav-container"
                key={index}
                onClick={() => setActiveMenu(index)}>
                <div className="about-nav">
                  <NavAbout name={list} index={index} menu={activeMenu} />
                </div>
                <div className="bottom-separator"></div>
              </div>
            );
          })}
        </div>
        <div className="about-right-container">
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
