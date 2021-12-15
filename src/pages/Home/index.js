import { React, useContext } from "react";
import "../../styles/home.css";
import Navbar from "../../components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "../NavPages/Home.js";
import AboutPage from "../NavPages/About";
import ServicesPage from "../NavPages/Services";
import WorkPage from "../NavPages/Work";
import VisitorPage from "../NavPages/Visitor.js";
import SettingsPage from "../NavPages/Settings";
import Footer from "../../components/Footer";
import { AppContext } from "../../utils/AppContext";

export default function Home() {
  const { theme } = useContext(AppContext);

  return (
    <div className="global-container" data-theme={theme}>
      <div className="home-container">
        <Navbar />
        <div className="home-inner-container">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about-me" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/special" element={<VisitorPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            {/* <Route path="*" element={<Page404 />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

/*
https://www.figma.com/file/0ygB2cif3OlUXzJRk4bsoq/Portfolio?node-id=0%3A1
*/
