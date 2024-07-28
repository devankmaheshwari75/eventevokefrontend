import React from "react";
import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Branches</h2>
        <ul>
          <li>
            <FaLocationDot color="white" /> Bangalore
          </li>
          <li>
            <FaLocationDot color="white" /> Hyderabad
          </li>
          <li>
            <FaLocationDot color="white" /> Delhi
          </li>
          <li>
            <FaLocationDot color="white" /> Kolkata
          </li>
          <li>
            <FaLocationDot color="white" /> Chennai
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link to="/" className="footer-link">
              <FaArrowRight color="white" /> Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="footer-link">
              <FaArrowRight color="white" /> Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="footer-link">
              <FaArrowRight color="white" /> About
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="footer-link">
              <FaArrowRight color="white" /> Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">
              <FaArrowRight color="white" /> Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Contact Info</h2>
        <ul>
          <li>
            <FaPhoneAlt color="white" /> +91 7009972197
          </li>
          <li>
            <FaPhoneAlt color="white" /> +91 8607331801
          </li>
          <li>
            <IoMail color="white" /> eventevoke@gmail.com
          </li>
          <li>
            <IoMail color="white" /> @eventevoke
          </li>
          <li>
            <FaLocationDot color="white" />
            Bangalore, India - 560054
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Follow Us</h2>
        <ul>
          <li>
            <FaFacebook color="white" /> Facebook
          </li>
          <li>
            <FaTwitter color="white" /> Twitter
          </li>
          <li>
            <AiFillInstagram color="white" /> Instagram
          </li>
          <li>
            <FaLinkedin color="white" /> LinkedIn
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
