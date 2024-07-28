import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import "../css/Contact.css";
import Navbar from "../components/Header/Navbar";
import { Form } from "react-router-dom";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    noOfDays: "",
    events: "",
    guests: "",
    rooms: "",
    budget: "",
    services: "",
    specialRequest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();

    fetch("http://localhost:4000/api/plan/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
        return response.json();
      })
      .then((data) => {
        alert("Form submitted successfully!");
        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          whatsapp: "",
          noOfDays: "",
          events: "",
          guests: "",
          rooms: "",
          budget: "",
          services: "",
          specialRequest: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Failed to submit form. Please try again.");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="Main_Heading_Contact_Us">
        <h1>Contact Us!</h1>
      </div>
      <div>
        <div className="contact">
          <div className="contact__header">
          <div className="host-link">
              <p>
                Want to host an event? <Link to="/Hostform">Click here</Link>
              </p>
            </div>
            <h2>Plan Your Beautiful Day</h2>
            <p>
              Transform your special day into an unforgettable memory with
              EventEvoke. Contact us today for a personalized consultation and
              let us craft a celebration as unique as you.
            </p>
           {" "}
          </div>
          <div className="contact__details">
            <div className="contact__left">
              <div className="contact__item">
                <FaMapLocationDot className="icon" />
                <div>
                  <h3>Address</h3>
                  <p>
                    Ground Floor & 2nd Floor, #198, Industrial Area Phase 2,
                    Panchkula, Haryana 134113
                  </p>
                </div>
              </div>
              <div className="contact__item">
                <FaEnvelope className="icon" />
                <div>
                  <h3>Email</h3>
                  <p>event_evoke@example.com</p>
                </div>
              </div>
              <div className="contact__item">
                <FaPhone className="icon" />
                <div>
                  <h3>Phone Number</h3>
                  <p>+91 8607331801</p>
                </div>
              </div>
              <div className="contact__item">
                <FaWhatsapp className="icon" />
                <div>
                  <h3>Whatsapp Us</h3>
                  <p>+91 84567890</p>
                </div>
              </div>
            </div>
            <div className="contact__right">
              <form onSubmit={handleSubmit}>
                <div className="form__group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form__group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form__group">
                  <label htmlFor="whatsapp">Whatsapp Number</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>

                <div className="form__group">
                  <label htmlFor="noOfDays">Number of Days</label>
                  <input
                    type="number"
                    id="noOfDays"
                    name="noOfDays"
                    value={formData.noOfDays}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="events">Number of Events</label>
                  <input
                    type="number"
                    id="events"
                    name="events"
                    value={formData.events}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="guests">Number of Guests</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="rooms">Number of Rooms</label>
                  <input
                    type="number"
                    id="rooms"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="budget">Budget (in lakhs)</label>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="services">Select Service</label>
                  <select
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                  >
                    <option value="1">Service 1</option>
                    <option value="2">Service 2</option>
                    <option value="3">Service 3</option>
                    <option value="4">Service 4</option>
                  </select>
                </div>
                <div className="form__group">
                  <label htmlFor="specialRequest">Any Special Request</label>
                  <textarea
                    id="specialRequest"
                    name="specialRequest"
                    value={formData.specialRequest}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
