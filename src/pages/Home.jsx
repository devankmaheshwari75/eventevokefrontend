import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Header/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Gallery from "./Gallery.jsx";
import WeddingPlanning from "./Sub-Services-Components/Wedding_Planning.jsx";
import "../css/Home.css";
import Subpart1 from "../components/Subpart1/Subpart1.jsx";
import Subpart2 from "../components/Subpart2/Subpart2.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import Faq from "../components/Faq/Faq.jsx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaArrowCircleDown } from "react-icons/fa";

import ServiceCard from "../components/Service Cards/ServiceCard.jsx";

const HomePage = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  return (
    <div>
      <Navbar />
      <div className="home-page">
        <div className="content">
          <div className="title">
            <h1 className="heading">" Crafting Dreams, Creating Memories "</h1>
            <br />
            <p className="subheading">Elevate Your Event to Extraordinary</p>
            <br />
            <br />
            <button className="get-started-btn">
              <Link
                to="/contact"
                className="nav-button"
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                }}
              >
                GET STARTED
              </Link>
            </button>
            <div
              className="scroll-icon"
              onClick={handleScroll}
              title="Scroll Down"
            >
              <i
                className="fas fa-chevron-down"
                style={{ fontSize: "2.5rem", color: "white" }}
              >
                <FaArrowCircleDown />
              </i>
            </div>
          </div>
        </div>
      </div>
      <ServiceCard/>
      <Subpart1 />
      <Subpart2 />

      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
