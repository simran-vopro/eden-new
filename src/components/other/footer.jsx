import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import images from "../theme/imagesPath";
import { Link } from "react-router-dom";
import { useModal } from "../pages/ModalContext";

const Footer = () => {
  const { openContactModal } = useModal();
  return (
    <footer className="footer-container">
      <div className="custom-footer">
        <div className="footer-col">
          <div>
            <img src={images.logo} alt="logo" className="logo mb-2" />
            {/* <p className="footer-text">
              Do not hesitate to get in touch with us, or investigate the best
              way for us to help with your utilities. We can start supporting
              you immediately: contact us and one of our highly trained staff
              will be in touch shortly.
            </p> */}
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <a href="#">Services</a>
            </li> */}
            {/* <li>
              <a href="#">Eden Partnership</a>
            </li> */}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/how-it-works">How it Works</Link>
            </li>
            <li>
              <Link to="/insights">Insights</Link>
            </li>
            <li>
              <Link onClick={openContactModal}>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Address</h4>
          <div className="footer-row">
            <img className="search-icon" src={images.subway_location} />
            <p className="footer-address">
              The Barn,
              <br />
              Golden Square Henfield,
              <br />
              West Sussex, BN5 9DP
            </p>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Me</h4>

          <div>
            <div className="footer-row">
              <img className="search-icon" src={images.line_md_phone} />
              <p className="footer-contact">01273-950200</p>
            </div>
            <div style={{ padding: "0.5rem" }}></div>
            <div className="footer-row">
              <img className="search-icon" src={images.ic_outline_email} />
              <p className="footer-contact">info@edenutilities.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2025. All Rights Reserved</p>
        <div className="socials">
          <span className="follow-text">Follow Us:</span>
          <a
            target="_blank"
            href="https://www.facebook.com/edenutilities/?ref=content_filter&_rdr"
            className="social-icon"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/eden-utilities/"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/EdenUtilities"
            className="social-icon"
            aria-label="X (Twitter)"
          >
            <FaXTwitter />
          </a>
          {/* <a href="#" className="social-icon" aria-label="Instagram">
            <FaInstagram />
          </a> */}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
