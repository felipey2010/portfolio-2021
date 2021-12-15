import { FaFolder } from "react-icons/fa";

export default function Folder({ name }) {
  return (
    <div className="blog-item">
      <FaFolder className="folder-icon" />
      <h6 className="folder-text">{name}</h6>
    </div>
  );
}
