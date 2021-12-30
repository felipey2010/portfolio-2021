import { useState, useContext, useEffect } from "react";
import CustomSwitch from "../../../../components/switch";
import { AppContext } from "../../../../utils/AppContext";
import Translation from "../../../../utils/Translation.json";

export default function General() {
  const { theme, switchTheme, language, setLanguage, getMenuName } =
    useContext(AppContext);
  const [darkOn, setDarkOn] = useState(false);

  function handleToggle() {
    const navTheme = theme === "light" ? "dark" : "light";
    setDarkOn(!darkOn);
    switchTheme(navTheme);
    localStorage.setItem("portfolio-theme", navTheme);
  }

  function handleChangeLanguage(value) {
    setLanguage(value);
    localStorage.setItem("portfolio-language", value);
    getMenuName();
  }

  useEffect(() => {
    const selectedTheme = localStorage.getItem("portfolio-theme") ?? "";
    if (selectedTheme === "dark") setDarkOn(true);
    else setDarkOn(false);
  }, []);

  return (
    <>
      <div className="description-container">
        <div className="description-title">
          <h6 className="text-h6">{Translation[40][language]}</h6>
        </div>
        <div className="theme-container">
          <p className="text-p">{Translation[41][language]}</p>
          <CustomSwitch checked={darkOn} handleToggle={handleToggle} />
        </div>
      </div>

      <div className="description-container">
        <div className="description-title">
          <h6 className="text-h6">{Translation[42][language]}</h6>
        </div>
        <div className="theme-container">
          <p className="text-p">{Translation[43][language]}</p>
          <select
            className="language-select"
            value={language}
            onChange={e => handleChangeLanguage(e.target.value)}>
            <option value="en" className="language-option">
              English
            </option>
            <option value="pt" className="language-option">
              Português - BR
            </option>
          </select>
        </div>
      </div>
    </>
  );
}
