import { useState, useContext } from "react";
import "../../../styles/WorkPage.css";
import NavAbout from "../../../components/NavAbout";
import Blogs from "./submenus/Blogs";
import Dashboard from "./submenus/Dashboard";
import Games from "./submenus/Games";
import Stores from "./submenus/Stores.js";
import Others from "./submenus/others.js";
import { AppContext } from "../../../utils/AppContext";

import { CgWebsite } from "react-icons/cg";
import { MdLocalGroceryStore, MdDashboardCustomize } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { VscSymbolMisc } from "react-icons/vsc";

export default function WorkPage() {
  const [activeMenu, setActiveMenu] = useState(0);
  const { language } = useContext(AppContext);

  let menuList;
  if (language === "pt") {
    menuList = ["Sites", "Dashboard", "Lojas", "Jogos", "Outros"];
  } else {
    menuList = ["Sites", "Dashboard", "Stores", "Games", "Others"];
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
                <CgWebsite className="left-mobile-icon" />
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
                <MdDashboardCustomize className="left-mobile-icon" />
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
                <MdLocalGroceryStore className="left-mobile-icon" />
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
                <IoGameController className="left-mobile-icon" />
              </div>
              <div className="bottom-separator"></div>
            </div>

            <div
              className="left-nav-container"
              onClick={() => setActiveMenu(4)}>
              <div
                className={
                  activeMenu === 4 ? "left-nav left-nav-active" : "left-nav"
                }>
                <VscSymbolMisc className="left-mobile-icon" />
              </div>
              <div className="bottom-separator"></div>
            </div>
          </div>
        </div>

        {/* Inner right container */}
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
