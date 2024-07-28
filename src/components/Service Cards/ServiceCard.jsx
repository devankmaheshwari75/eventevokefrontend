import React from "react";
import "./ServiceCard.css"; // Make sure to create a corresponding CSS file
import Charity from "../../assets/Charity.jpeg";
import Corporate from "../../assets/Corporate.jpeg";
import Destination from "../../assets/Destination.jpg";

const ServiceCard = () => {
  const eventData = [
    {
      id: 1,
      image: Corporate,
      title: "CORPORATE EVENT",
      description: "Crafting exceptional corporate events is our specialty ",
    },
    {
      id: 2,
      image: Charity,
      title: "CHARITY EVENT :",
      description: "Uniting passionate individuals for a shared cause ",
    },
    {
      id: 3,
      image: Charity,
      title: "SPECIAL OCCASION ",
      description: "Honoring life's most cherished occasions",
    },
    {
      id: 4,
      image: Corporate,
      title: "WEDDING DAY",
      description: "Crafting Your Ideal Wedding Experience ",
    },
    {
      id: 5,
      image: Destination,
      title: "DESTINATION EVENTS",
      description: "Transforming Your Dream Destination Event into Reality",
    },
    {
      id: 6,
      image: Destination,
      title: "Online Events",
      description:
        "Your One-Stop Destination for Seamless Online Event Creation!",
    },
    // Add more event objects as needed
  ];

  return (
    <>
      <div className="event-list">
        <h1>Services</h1>

        {eventData.map((event) => (
          <div key={event.id} className="card">
            <img src={event.image} alt={event.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{event.title}</h3>
              <p className="card-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceCard;
