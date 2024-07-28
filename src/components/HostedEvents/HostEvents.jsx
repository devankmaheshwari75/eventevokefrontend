import React, { useState, useEffect } from 'react';
import '../HostedEvents/HostEvents.css'; // Import CSS file for styling
import Cards from '../Cards/Cards.jsx'; // Import the Cards component

const HostedEvents = () => {
  const [hostedEvents, setHostedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/plan/hostData');
        const data = await response.json();
        if (response.ok) {
          setHostedEvents(data.data);
        } else {
          console.error('Failed to fetch data:', data.message);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hosted Events</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Cards eventData={hostedEvents} /> 
      )}
    </div>
  );
};

export default HostedEvents;
