import Tada from "react-reveal/Tada";
import Translation from "../../../../utils/Translation.json";

export default function ThirdService({ language }) {
  return (
    <div className="first-service-container">
      <p className="first-service-text-normal">{Translation[62][language]} </p>
      <div className="first-service-text-bold">
        <Tada>
          <p className="first-service-text-bold-text">
            {Translation[63][language]}
          </p>
        </Tada>
      </div>
      <p className="first-service-text-normal">{Translation[64][language]}</p>
    </div>
  );
}
