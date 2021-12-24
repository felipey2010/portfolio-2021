import Translation from "../../../../utils/Translation.json";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

export default function FirstService({ language }) {
  const [changeText, setChangeText] = useState(0);
  let works;

  if (language === "en") {
    works = ["DESIGN", "CODE"];
  } else {
    works = ["desenho", "codifico"];
  }

  //Loading function
  function animateText() {
    const timeoutId = setTimeout(() => {
      if (changeText === 0) setChangeText(1);
      else if (changeText === 1) setChangeText(0);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }

  useEffect(() => {
    animateText();

    // eslint-disable-next-line
  }, [changeText]);

  return (
    <div className="first-service-container">
      <p className="first-service-text-normal">{Translation[49][language]} </p>
      <div className="first-service-text-bold">
        <Fade top opposite collapse when={changeText === 0}>
          <p className="first-service-text-bold-text">{works[0]}</p>
        </Fade>
        <Fade top opposite collapse when={changeText === 1}>
          <p className="first-service-text-bold-text">{works[1]}</p>
        </Fade>
      </div>
      <p className="first-service-text-normal">{Translation[50][language]}</p>
    </div>
  );
}
/*
TO do

Animate design - code
*/
