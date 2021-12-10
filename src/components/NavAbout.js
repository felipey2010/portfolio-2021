import { IoArrowRedo } from "react-icons/io5";
import Fade from "react-reveal/Fade";

export default function NavAbout({ name, index, menu }) {
  return (
    <>
      <div className="about-nav-icon">
        <Fade left when={menu === index}>
          <IoArrowRedo />{" "}
        </Fade>
      </div>
      <div className="about-nav-item">{name}</div>
    </>
  );
}
