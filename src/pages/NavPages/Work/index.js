import { useState, useContext } from "react";
import "../../../styles/WorkPage.css";
import NavAbout from "../../../components/NavAbout";
import Blogs from "./submenus/Blogs";
import Dashboard from "./submenus/Dashboard";
import Games from "./submenus/Games";
import Stores from "./submenus/Stores.js";
import Others from "./submenus/others.js";
import { AppContext } from "../../../utils/AppContext";

export default function WorkPage() {
  const [activeMenu, setActiveMenu] = useState(0);
  const { language } = useContext(AppContext);

  let menuList;
  if (language === "pt") {
    menuList = ["Blogs", "Dashboard", "Lojas", "Jogos", "Outros"];
  } else {
    menuList = ["Blogs", "Dashboard", "Stores", "Games", "Others"];
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
            <Blogs />
          ) : (
            <>
              {activeMenu === 1 ? (
                <Dashboard />
              ) : (
                <>
                  {activeMenu === 2 ? (
                    <Stores />
                  ) : (
                    <>
                      {activeMenu === 3 ? (
                        <Games />
                      ) : (
                        <>
                          {activeMenu === 4 ? (
                            <Others />
                          ) : (
                            <div className="right-page-text">
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
