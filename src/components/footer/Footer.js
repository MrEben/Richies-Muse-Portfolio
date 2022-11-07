import React from "react";
import "./footer.css";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/Wise b SG_Main Logo 22.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <img className="foot-logo" src={logo} alt="" />
      </a>
      <ul className="permalinks">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <a href="#works">works</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://">
          <FaFacebook />
        </a>
        <a href="http://">
          <FaLinkedin />
        </a>
        <a href="http://">
          <FaTwitter />
        </a>
        <a href="http://">
          <FaBehance />
        </a>
      </div>

      <div className="footer__copyrght">
        <small>&copy; richies muse. all rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
