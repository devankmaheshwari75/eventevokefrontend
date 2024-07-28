import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
// import "../css/Host.css";
import "./Host.css";
// import Navbar from "../components/Header/Navbar";

const Host = () => {
  return (
    <div className="contact__right">
      <form>
        <div className="form__group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form__group">
          <label htmlFor="phone">Phone Number</label>
          <input type="number" id="phone" name="phone" />
        </div>

        <div className="form__group">
          <label htmlFor="phone">Whatsapp Number</label>
          <input type="number" id="whatsapp-number" name="whatsapp-number" />
        </div>

        <div className="form__group">
          <label htmlFor="days">Title</label>
          <input type="text" id="title" name="title" />
        </div>

        <div className="form__group">
          <label htmlFor="events">Description</label>
          <input type="text" id="description" name="description" />
        </div>
        <div className="form__group">
          <label htmlFor="guest-appearance">Guest Appearance</label>
          <input type="number" id="guest-appearance" name="guests" />
        </div>
        <div className="form__group">
          <label htmlFor="Thumbnail">Thumbnail</label>
          <input type="file" id="thumbnail" name="thumbnail" />
        </div>
        <div className="form__group">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" name="amount" />
        </div>
        <div className="form__group">
          <label htmlFor="time">Time</label>
          <input type="time" id="time" name="time" />
        </div>

        <div className="form__group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Host;
