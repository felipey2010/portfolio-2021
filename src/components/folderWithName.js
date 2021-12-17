import { FaFolder } from "react-icons/fa";

export default function Folder({ name, description, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="blog-item">
      <FaFolder className="folder-icon" />
      <h6 className="folder-text">{name}</h6>
      <div className="folder-description">{description}</div>
    </a>
  );
}
