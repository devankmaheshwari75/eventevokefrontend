// Cards.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Cards.css';

const truncateTitle = (title) => {
  const words = title.split(' ');
  if (words.length > 9) {
    return words.slice(0, 9).join(' ') + '...';
  }
  return title;
};

const formatDateTime = (dateTimeString) => {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };

  const dateTime = new Date(dateTimeString);
  const date = dateTime.toLocaleDateString('en-GB', options);
  const time = dateTime.toLocaleTimeString('en-US', options);

  return { date, time };
};

const Cards = ({ eventData }) => {
  const handleJoinClick = (eventId) => {
    // Redirect to the event details page
    window.location.href = `/event/${eventId}`;
  };

  return (
    <div className="event-list">
      {eventData.map(event => {
        const { date, time } = formatDateTime(event.date);
        const truncatedTitle = truncateTitle(event.title);

        return (
          <div key={event._id} className="card">
            <img src={event.image} className="card-image" alt={"Failed to Load Image"} />
            <div className="card-content">
              <h3 className="card-title">{truncatedTitle}</h3>
              <p className="card-date">Date: {date}</p>
              <p className="card-price">{event.amount === 0 ? 'Free' : `Price $${event.amount}`}</p>
              <div className="card-host">
                <span>{event.guestAppearance}</span>
              </div>
              <button className='join' onClick={() => handleJoinClick(event._id)}>Join</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
