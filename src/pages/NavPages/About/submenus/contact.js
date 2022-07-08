import { useState, useContext, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Translation from "../../../../utils/Translation.json";
import { AppContext } from "../../../../utils/AppContext";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { language } = useContext(AppContext);
  const [btnActivated, setBtnActivated] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (message.trim() && email.trim()) {
      setBtnActivated(false);
    } else {
      setBtnActivated(true);
    }
  }, [email, message]);

  function sendEmail(e) {
    e.preventDefault();
    if (
      email !== " " &&
      email.includes("@") &&
      message !== " " &&
      name !== " "
    ) {
      //Activate loading animation
      setLoading(true);

      const data = {
        service_id: process.env.REACT_APP_SERVICE_ID,
        template_id: process.env.REACT_APP_TEMPLATE_ID,
        user_id: process.env.REACT_APP_USER_ID,
        sender_email: email,
        sender_name: name,
        sender_message: message,
      };

      axios
        .post("https://api.emailjs.com/api/v1.0/email/send-form", data)
        .then(() => {
          alert(Translation[75][language]);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
          clearFields();
          <Navigate to="/" />;
        });
    }
  }

  function clearFields() {
    setName("");
    setEmail("");
    setMessage("");
  }

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
          <button
            className="contact-send-button"
            disabled={btnActivated}
            onClick={sendEmail}>
            {Translation[60][language]}
          </button>

          <ClockLoader size={25} color="var(--text-color)" loading={loading} />
        </div>
      </div>
    </>
  );
}
