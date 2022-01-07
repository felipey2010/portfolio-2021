import "../../../styles/ServicesPage.css";
import { useContext, useState, useLayoutEffect } from "react";
import { AppContext } from "../../../utils/AppContext";
import FirstService from "./sub-items/firstService";
import SecondService from "./sub-items/secondService";
import ThirdService from "./sub-items/thirdService";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Shake from "react-reveal/Shake";

export default function ServicesPage() {
  const numberOfSteps = 3; //Number of Services to show
  const [step, setStep] = useState(0);
  const { language } = useContext(AppContext);

  // function to remove classlist
  function removeRef(name) {
    const containerRef = document.getElementById(
      "services-animated-div"
    ).classList;
    const timeoutId = setTimeout(() => {
      containerRef.remove(name);
    }, 500);
    return () => clearTimeout(timeoutId);
  }

  function handleNext() {
    const containerRef = document.getElementById("services-animated-div");
    containerRef.classList.add("div-animate-left");
    // if (step + 1 === numberOfSteps) setStep(0);
    // else setStep(step + 1);
    // removeRef("div-animate-left");
  }

  function handlePrevious() {
    const containerRef = document.getElementById("services-animated-div");
    containerRef.classList.add("div-animate-right");

    if (step - 1 < 0) setStep(numberOfSteps - 1);
    else setStep(step - 1);

    removeRef("div-animate-right");
  }

  useLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      handleNext();
    }, 6500);
    return () => clearTimeout(timeoutId);

    // eslint-disable-next-line
  }, [step]);

  return (
    <div className="services-page-container">
      <div className="services-inner-container">
        <div className="services-left-side">
          <BsArrowLeftCircleFill
            className="services-arrow-icons"
            onClick={() => handlePrevious()}
          />
        </div>
        <div className="services-center">
          <div className="services-center-container" id="services-animated-div">
            {step === 0 && (
              <Shake>
                <FirstService language={language} />
              </Shake>
            )}
            {step === 1 && <SecondService language={language} />}
            {step === 2 && <ThirdService language={language} />}
          </div>
        </div>
        <div className="services-right-side">
          <BsArrowRightCircleFill
            className="services-arrow-icons"
            onClick={() => handleNext()}
          />
        </div>
      </div>
    </div>
  );
}
