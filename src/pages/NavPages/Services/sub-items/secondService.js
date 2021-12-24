import Tada from "react-reveal/Tada";
import Translation from "../../../../utils/Translation.json";

export default function SecondService({ language }) {
  return (
    <div className="first-service-container">
      <p className="first-service-text-normal">{Translation[51][language]} </p>
      <div className="first-service-text-bold">
        <Tada>
          <p className="first-service-text-bold-text">
            {Translation[52][language]}
          </p>
        </Tada>
      </div>
      <p className="first-service-text-normal">{Translation[53][language]}</p>
    </div>
  );
}
