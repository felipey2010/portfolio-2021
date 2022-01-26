import { useState, createContext, useEffect } from "react";
import Translation from "./Translation.json";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  // const [loading, setLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [menuName, setMenuName] = useState("");
  // Site Theme
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(
    localStorage.getItem("portfolio-theme", defaultDark ? "dark" : "light") ??
      "light"
  );
  //Site translation language
  const [language, setLanguage] = useState(
    localStorage.getItem("portfolio-language") ?? "en"
  );

  function switchTheme() {
    const navTheme = theme === "light" ? "dark" : "light";
    setTheme(navTheme);
  }

  async function getMenuName() {
    setOpenMenu(false);
    //Check for existence of active link
    const flag = document.getElementsByClassName("active").length;

    if (flag) {
      let activeMenu = await document.querySelector(".active").text.toString();
      setMenuName(activeMenu);
      const timeoutId = setTimeout(() => {
        setMenuName(document.querySelector(".active").text.toString());
      }, 50);
      return () => clearTimeout(timeoutId);
    } else {
      setMenuName(Translation[66][language]);
    }
  }

  //Loading function
  // function loadPage() {
  //   setLoading(true);
  //   //Clear loading screen after 2 seconds
  //   const timeoutId = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timeoutId);
  // }

  useEffect(() => {
    const selectedTheme = localStorage.getItem("portfolio-theme") ?? "";
    if (selectedTheme === "dark") setTheme("dark");
    else setTheme("light");
  }, []);

  return (
    <AppContext.Provider
      value={{
        // loading,
        // setLoading,
        theme,
        setTheme,
        defaultDark,
        switchTheme,
        language,
        setLanguage,
        openMenu,
        setOpenMenu,
        menuName,
        getMenuName,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
