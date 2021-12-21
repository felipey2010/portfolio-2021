import { MdEmail, MdFacebook } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
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
          rel="noreferrer"
          className="contact-item-container-link">
          <div className="contact-item-container-top">
            <MdFacebook className="contact-item-icon" />
            <small className="contact-item-text">social-media</small>
          </div>
          <p className="contact-item-container-text">Facebook</p>
        </a>

        <a
          href="https://www.linkedin.com/in/philip-mahama-akpanyi"
          target="_blank"
          rel="noreferrer"
          className="contact-item-container-link">
          <div className="contact-item-container-top">
            <FaLinkedin className="contact-item-icon" />
            <small className="contact-item-text">social-media</small>
          </div>
          <p className="contact-item-container-text">LinkedIn</p>
        </a>

        <a
          href="https://github.com/felipey2010"
          target="_blank"
          rel="noreferrer"
          className="contact-item-container-link">
          <div className="contact-item-container-top">
            <FaGithub className="contact-item-icon" />
            <small className="contact-item-text">social-media</small>
          </div>
          <p className="contact-item-container-text">Github</p>
        </a>
      </div>
      <div className="contact-form-div">Contact Form</div>
    </>
  );
}
