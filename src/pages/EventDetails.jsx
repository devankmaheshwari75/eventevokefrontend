// EventDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = ({ eventData }) => {
  const { eventId } = useParams();

  // Find the event object with the matching eventId
  const event = eventData.find(event => event._id === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <img src={event.image} alt={event.title} />
      <p>Date: {event.date}</p>
      <p>Price: {event.amount === 0 ? 'Free' : `$${event.amount}`}</p>
      <p>Host: {event.hostName}</p>
      <p>Guest Appearance: {event.guestAppearance}</p>
      <p>Description: {event.description}</p>
    </div>
  );
};

export default EventDetails;
