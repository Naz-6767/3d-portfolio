import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Work with me</h4>
            <p>
              If you're serious about scaling, let's talk. I work with brands on
              Amazon growth, TikTok Shop scaling, SEO systems, paid ads,
              conversion improvements, and better digital execution.
            </p>
            <h4>Direct</h4>
            <p>
              <a href="mailto:me@naimsiddiki.com" data-cursor="disable">
                me@naimsiddiki.com
              </a>
            </p>
            <p>
              <a href="tel:07810131889" data-cursor="disable">
                07810 131889
              </a>
            </p>
            <p>Leeds, England, United Kingdom</p>
          </div>
          <div className="contact-box">
            <h4>Links</h4>
            <a
              href="https://www.linkedin.com/in/naim-siddiki/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://naimsiddiki.com/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Website <MdArrowOutward />
            </a>
            <a
              href="https://wave-x.org/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Wave-X <MdArrowOutward />
            </a>
            <a
              href="https://www.facebook.com/ami.oilam.naim55/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Built for <br /> <span>Naim Siddiki</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
