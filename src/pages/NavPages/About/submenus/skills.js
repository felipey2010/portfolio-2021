import { useContext } from "react";
import { AppContext } from "../../../../utils/AppContext";
import Translation from "../../../../utils/Translation.json";

export default function Skills() {
  const { language } = useContext(AppContext);
  return (
    <>
      <div className="description-container">
        <div className="description-title">
          <h6 className="text-h6">{Translation[29][language]}</h6>
        </div>
        <div className="description-text">
          <p className="text-p">
            <strong>Front-end:</strong> ReactJS - HTML {`${"&"}`} CSS
          </p>
        </div>
        <div className="description-text">
          <p className="text-p">
            <strong>{Translation[30][language]}:</strong> React Native - Java
          </p>
        </div>
        <div className="description-text">
          <p className="text-p">
            <strong>Back-end:</strong> Node JS - MongoDB -MySQL
          </p>
        </div>
        <div className="description-text">
          <p className="text-p">
            <strong>{Translation[31][language]}:</strong> Git - Vercel - Heroku
            - Insomnia - Trello - Joomla - Figma - Canvas - Material UI /
            Bootstrap
          </p>
        </div>

        <div className="description-text">
          <p className="text-p">
            <strong>{Translation[32][language]}:</strong> C/C++
          </p>
        </div>
      </div>

      <div className="description-container skills-container">
        <div className="description-title">
          <h6 className="text-h6">{Translation[33][language]}</h6>
        </div>
        <div className="description-text">
          <p className="text-p">{Translation[34][language]}</p>
        </div>
        <div className="description-text">
          <p className="text-p">{Translation[35][language]}</p>
        </div>
        <div className="description-text">
          <p className="text-p">{Translation[36][language]}</p>
        </div>
        <div className="description-text">
          <p className="text-p">{Translation[37][language]}</p>
        </div>
      </div>
    </>
  );
}
