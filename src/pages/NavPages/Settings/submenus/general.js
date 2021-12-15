import { useState, useContext, useEffect } from "react";
import CustomSwitch from "../../../../components/switch";
import { AppContext } from "../../../../utils/AppContext";
export default function General() {
  const { theme, switchTheme } = useContext(AppContext);
  const [darkOn, setDarkOn] = useState(false);

  function handleToggle() {
    const navTheme = theme === "light" ? "dark" : "light";
    setDarkOn(!darkOn);
    switchTheme(navTheme);
    localStorage.setItem("portfolio-theme", navTheme);
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
          <h6 className="text-h6">APPEARANCCE</h6>
        </div>
        <div className="theme-container">
          <p className="text-p">Theme</p>
          <CustomSwitch checked={darkOn} handleToggle={handleToggle} />
        </div>
      </div>

      <div className="description-container">
        <div className="description-title">
          <h6 className="text-h6">LANGUAGE</h6>
        </div>
        <div className="theme-container">
          <p className="text-p">Select Language</p>
          <select className="language-select">
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
