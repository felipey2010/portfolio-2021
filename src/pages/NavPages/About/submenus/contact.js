import { useState, useContext, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Translation from "../../../../utils/Translation.json";
import { AppContext } from "../../../../utils/AppContext";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { language } = useContext(AppContext);
  const [btnActivated, setBtnActivated] = useState(true);

  useEffect(() => {
    if (message.trim() && email.trim()) {
      setBtnActivated(false);
    } else {
      setBtnActivated(true);
    }
  }, [email, message]);

  return (
    <>
      <div className="contact-menu-top-div">
        <div className="contact-item-container">
          <MdEmail className="contact-item-icon" />
          <p className="contact-item-container-text">pakpanyi@gmail.com</p>
        </div>
        {/* End of first item */}
        <a
          href="https://twitter.com/felipey2010"
          target="_blank"
          rel="noreferrer noopener"
          className="contact-item-container-link">
          <FaTwitter className="contact-item-icon" />
          <p className="contact-item-container-text">Twitter</p>
        </a>

        <a
          href="https://www.linkedin.com/in/philip-mahama-akpanyi"
          target="_blank"
          rel="noreferrer noopener"
          className="contact-item-container-link">
          <FaLinkedin className="contact-item-icon" />
          <p className="contact-item-container-text">LinkedIn</p>
        </a>

        <a
          href="https://github.com/felipey2010"
          target="_blank"
          rel="noreferrer noopener"
          className="contact-item-container-link">
          <FaGithub className="contact-item-icon" />
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
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="contact-item-email"
            placeholder={Translation[57][language]}
          />
        </div>
        <div className="contact-message-container">
          <textarea
            type="text"
            required
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="contact-item-message"
            placeholder={Translation[58][language]}
            max={24}
            multiple
          />
        </div>
        <div className="contact-send">
          <button className="contact-send-button" disabled={btnActivated}>
            {Translation[60][language]}
          </button>
        </div>
      </div>
    </>
  );
}
