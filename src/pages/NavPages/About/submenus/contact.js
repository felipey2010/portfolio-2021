import { useState, useContext } from "react";
import { MdEmail, MdFacebook } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Translation from "../../../../utils/Translation.json";
import { AppContext } from "../../../../utils/AppContext";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { language } = useContext(AppContext);

  return (
    <>
      {/* <div className="description-container">
        <div className="description-title">
          <h6 className="text-h6">E-mail</h6>
        </div>
        <div className="description-text">
          <p className="text-p">pakpanyi@gmail.com</p>
        </div>
      </div>

      <div className="description-container">
        <div className="description-title">
          <h6 className="text-h6">SOCIAL MEDIA</h6>
        </div>
        <div className="description-text">
          <p className="text-p">
            <a
              href="https://web.facebook.com/mahamaphilip"
              className="contact-link"
              target="_blank"
              rel="noreferrer">
              Facebook{" "}
            </a>
          </p>
        </div>
        <div className="description-text">
          <p className="text-p">
            <a
              href="https://www.linkedin.com/in/philip-mahama-akpanyi"
              className="contact-link"
              target="_blank"
              rel="noreferrer">
              LinkedIn{" "}
            </a>
          </p>
        </div>
        <div className="description-text">
          <p className="text-p">
            <a
              href="https://github.com/felipey2010"
              className="contact-link"
              target="_blank"
              rel="noreferrer">
              GitHub{" "}
            </a>
          </p>
        </div>
      </div> */}
      <div className="contact-menu-top-div">
        <div className="contact-item-container">
          <div className="contact-item-container-top">
            <MdEmail className="contact-item-icon" />
            <small className="contact-item-text">e-mail</small>
          </div>
          <p className="contact-item-container-text">pakpanyi@gmail.com</p>
        </div>
        {/* End of first item */}
        <a
          href="https://web.facebook.com/mahamaphilip"
          target="_blank"
          rel="noreferrer noopener"
          className="contact-item-container-link">
          <div className="contact-item-container-top">
            <MdFacebook className="contact-item-icon" />
            <small className="contact-item-text">
              {Translation[59][language]}
            </small>
          </div>
          <p className="contact-item-container-text">Facebook</p>
        </a>

        <a
          href="https://www.linkedin.com/in/philip-mahama-akpanyi"
          target="_blank"
          rel="noreferrer noopener"
          className="contact-item-container-link">
          <div className="contact-item-container-top">
            <FaLinkedin className="contact-item-icon" />
            <small className="contact-item-text">
              {Translation[59][language]}
            </small>
          </div>
          <p className="contact-item-container-text">LinkedIn</p>
        </a>

        <a
          href="https://github.com/felipey2010"
          target="_blank"
          rel="noreferrer noopener"
          className="contact-item-container-link">
          <div className="contact-item-container-top">
            <FaGithub className="contact-item-icon" />
            <small className="contact-item-text">
              {Translation[59][language]}
            </small>
          </div>
          <p className="contact-item-container-text">Github</p>
        </a>
      </div>
      <div className="contact-form-div">
        <div className="contact-form-message">
          <p className="contact-form-message-p">{Translation[61][language]}</p>
        </div>
        <div className="contact-form-container">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="contact-item-name"
            placeholder={Translation[56][language]}
          />

          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="contact-item-email"
            placeholder={Translation[57][language]}
          />
        </div>
        <div className="contact-message-container">
          <textarea
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="contact-item-message"
            placeholder={Translation[58][language]}
            max={24}
            multiple
          />
        </div>
        <div className="contact-send">
          <button className="contact-send-button">
            {Translation[60][language]}
          </button>
        </div>
      </div>
    </>
  );
}
