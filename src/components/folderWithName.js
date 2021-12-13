import { FcFolder } from "react-icons/fc";

export default function Folder({ name }) {
  return (
    <div className="blog-item">
      <FcFolder className="folder-icon" />
      <h6 className="folder-text">{name}</h6>
    </div>
  );
}
