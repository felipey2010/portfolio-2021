import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

export default function Project({ name, description, demo, gitURL, imgURL }) {
  return (
    <div className="project-container">
      <div className="image-section">
        <img src={imgURL} alt="project" />
        <div className="text-overlay">
          <h6 className="text-overlay-text">{name}</h6>
        </div>
      </div>
      <div className="description-section">
        <p className="description-section-p">{description}</p>
      </div>
      <div className="button-section">
        {gitURL && (
          <a
            href={gitURL}
            target="_blank"
            rel="noreferrer noopener"
            className="button-section-a">
            <AiFillGithub />
            <p className="button-section-p">Github</p>
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer noopener"
            className="button-section-a">
            <AiOutlineLink />
            <p className="button-section-p">Demo</p>
          </a>
        )}
      </div>
    </div>
  );
}
