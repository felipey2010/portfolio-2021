import { useState, createContext, useEffect } from "react";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
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
        loading,
        setLoading,
        theme,
        setTheme,
        defaultDark,
        switchTheme,
        language,
        setLanguage,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
