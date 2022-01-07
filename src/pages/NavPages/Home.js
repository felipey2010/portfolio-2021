import { useContext } from "react";
import "../../styles/homePage.css";
import ProfilePic from "../../images/4Github.png";
// import { BarLoader } from "react-spinners";
import Translation from "../../utils/Translation.json";
import { AppContext } from "../../utils/AppContext";
import { BiLinkExternal } from "react-icons/bi";
import Typed from "react-typed";

export default function HomePage() {
  const { language } = useContext(AppContext);
  return (
    <div className="home-page-container">
      <div className="home-page-div">
        <img src={ProfilePic} className="home-page-img" alt="profile" />
      </div>
      <div className="home-page-div">
        <h3 className="home-page-h3">
          {"<HelloWorld, "}
          {Translation[6][language]}
          {"/>"}
        </h3>
        {/* <div className="home-spinner-div">
          <BarLoader
            height={4}
            width={200}
            color={"rgba(172, 172, 172, 1)"}
            speedMultiplier={0.75}
          />
        </div> */}
        <h1 className="home-page-h1">Philip Akpanyi</h1>
        <div className="frontend-dev-container">
          <hr className="horizontal-line" />
          <div className="frontend-box-container">
            <div className="frontend-text-container">
              {/* <h5 className="frontend-text-h5">Front-end Dev</h5> */}
              <Typed
                strings={["Front-end Dev", "Backend Dev"]}
                className="frontend-text-h5"
                typeSpeed={120}
                backSpeed={120}
                backDelay={1000}
                startDelay={1000}
                loop></Typed>
            </div>
          </div>
        </div>
        <div className="resume-container">
          {language === "en" ? (
            <a
              href="https://drive.google.com/file/d/1j5J7n_4WGSi5VpxnsW5VrQziz9DJlBUN/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="resume-link">
              {Translation[55][language]}
              <BiLinkExternal className="resume-icon" />
            </a>
          ) : (
            <a
              href="https://drive.google.com/file/d/14cq2TwENGNZCa06Jg63439rPyG7nut7b/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="resume-link">
              {Translation[55][language]}
              <BiLinkExternal className="resume-icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
