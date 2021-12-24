import { AiOutlineFileText } from "react-icons/ai";

export default function Folder({ name, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="blog-item">
      <AiOutlineFileText className="folder-icon" />
      <h6 className="folder-text">{name}</h6>
      <div className="folder-description">{description}</div>
    </a>
  );
}
