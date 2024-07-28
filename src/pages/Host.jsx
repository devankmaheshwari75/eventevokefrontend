import "../css/Host.css";
import React from "react";

import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer.jsx";
import { Link } from 'react-router-dom';



function Host() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        window.location.href = "/";
      };

  return (
    <>
      <div>
        <Navbar />
        <div className="Main_Heading_Contact_Us">
          <h1>Host Event!</h1>
        </div>
        <div>
          <div className="contact">
            <div className="contact__header">
            <p>
                Want to contact us? Click here! <Link to="/contact">Click here</Link>
              </p>
              <h2>Create your event</h2>
              <p>
                Transform your special day into an unforgettable memory with
                EventEvoke. Contact us today for a personalized consultation and
                let us craft a celebration as unique as you.
              </p>
            </div>
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

                <button type="submit" onClick={handleSubmit}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Host;
