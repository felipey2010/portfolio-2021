import { useContext } from "react";
import { AppContext } from "../../../../utils/AppContext";
import Translation from "../../../../utils/Translation.json";

export default function Experience() {
  const { language } = useContext(AppContext);

  return (
    <>
      <div className="description-container">
        <div className="description-title">
          <h6 className="text-h6">{Translation[19][language]}</h6>
        </div>
        <div className="description-text">
          <p className="text-p">{Translation[20][language]}</p>
        </div>
        <div className="description-text">
          <p className="text-p">{Translation[21][language]}</p>
        </div>
      </div>

      <div className="description-container">
        <div className="description-title">
          <h6 className="text-h6">{Translation[22][language]}</h6>
        </div>
        <div className="description-text">
          <p className="text-p">
            <strong>{Translation[23][language]}</strong> -{" "}
            {Translation[24][language]}
          </p>
        </div>
        <div className="description-text">
          <p className="text-p">
            <strong>{Translation[25][language]}</strong> -{" "}
            {Translation[26][language]}
          </p>
        </div>
        <div className="description-text">
          <p className="text-p">
            <strong>{Translation[27][language]}</strong> -{" "}
            {Translation[28][language]}
          </p>
        </div>
      </div>

      {/* <div className="description-container">
        <div className="description-title">
          <h6 className="text-h6">LANGUAGES</h6>
        </div>
        <div className="description-text">
          <p className="text-p">English - Native</p>
        </div>
        <div className="description-text">
          <p className="text-p">Portuguese - Advanced</p>
        </div>
      </div> */}

      <div className="description-container">
        <div className="description-title">
          <h6 className="text-h6">{Translation[54][language]}</h6>
        </div>
        {/* Put Achievements below */}
        {/* <div className="description-text">
          <p className="text-p">{Translation[20][language]}</p>
        </div>
        <div className="description-text">
          <p className="text-p">{Translation[21][language]}</p>
        </div> */}
      </div>
    </>
  );
}
