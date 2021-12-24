import { useContext } from "react";
import { AppContext } from "../../../../utils/AppContext";
import Translation from "../../../../utils/Translation.json";

export default function General() {
  const { language } = useContext(AppContext);

  return (
    <>
      <div className="description-container">
        <div className="description-title">
          <h6 className="text-h6">{Translation[7][language]}</h6>
        </div>
        <div className="description-text">
          <p className="text-p">{Translation[8][language]}</p>
        </div>
      </div>

      <div className="description-container">
        <div className="description-title">
          <h6 className="text-h6">{Translation[9][language]}</h6>
        </div>
        <div className="description-text">
          <p className="text-p">
            <strong>{Translation[10][language]}:</strong>{" "}
            {Translation[11][language]}
          </p>
        </div>
        <div className="description-text">
          <p className="text-p">
            <strong>{Translation[12][language]}:</strong>{" "}
            {Translation[13][language]}
          </p>
        </div>
      </div>

      <div className="description-container">
        <div className="description-title">
          <h6 className="text-h6">{Translation[14][language]}</h6>
        </div>
        <div className="description-text">
          <p className="text-p">{Translation[15][language]}</p>
        </div>
        <div className="description-text">
          <p className="text-p">{Translation[16][language]}</p>
        </div>
      </div>

      <div className="description-container">
        <div className="description-title">
          <h6 className="text-h6">{Translation[44][language]}</h6>
        </div>
        <div className="description-text">
          <p className="text-p">{Translation[45][language]}</p>
        </div>
        <div className="description-text">
          <p className="text-p">{Translation[46][language]}</p>
        </div>
        <div className="description-text">
          <p className="text-p">{Translation[47][language]}</p>
        </div>
        <div className="description-text">
          <p className="text-p">{Translation[48][language]}</p>
        </div>
      </div>
    </>
  );
}
