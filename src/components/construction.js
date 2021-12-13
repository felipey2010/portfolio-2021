import Page404 from "../images/Page404.png";

export default function Construction() {
  return (
    <div className="construction-container">
      <div className="construction-inner-container">
        <div className="construction-image-container">
          <img
            src={Page404}
            alt="in construction"
            className="construction-image"
          />
        </div>
        <div className="construction-text-container">
          <h3 className="construction-text">IN CONSTRUCTION</h3>
        </div>
      </div>
    </div>
  );
}
