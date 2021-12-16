import { useContext } from "react";
import "../../styles/homePage.css";
import ProfilePic from "../../images/4Github.png";
// import { BarLoader } from "react-spinners";
import Translation from "../../utils/Translation.json";
import { AppContext } from "../../utils/AppContext";

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
      </div>
    </div>
  );
}
