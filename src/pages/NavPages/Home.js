import { useContext } from "react"
import "../../styles/homePage.css"
import ProfilePic from "../../images/4Github.png"
// import { BarLoader } from "react-spinners";
import Translation from "../../utils/Translation.json"
import { AppContext } from "../../utils/AppContext"
import { BiLinkExternal } from "react-icons/bi"
import { BsStarFill } from "react-icons/bs"
import Typed from "react-typed"

const filePath = "/downloads/PHILIP_MAHAMA_AKPANYI.pdf"

export default function HomePage() {
  const { language } = useContext(AppContext)

  function openFile() {
    window.open(filePath, "_blank")
  }

  return (
    <div className="home-page-container">
      <div className="home-page-div">
        <div className="home-page-inner-div align-center">
          <img src={ProfilePic} className="home-page-img" alt="profile" />
        </div>
        <div className="home-page-status">
          <BsStarFill />
          <p className="status-title">Status :</p>
          <p className="status-description">{Translation[73][language]}</p>
        </div>
      </div>
      <div className="home-page-div">
        <div className="home-page-inner-div">
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
        </div>
        <div className="resume-container">
          <button onClick={openFile} className="resume-link">
            {Translation[55][language]}
            <BiLinkExternal className="resume-icon" />
          </button>
        </div>
      </div>
    </div>
  )
}
