import React, { useState, useEffect } from 'react';
import './Testimonials.css'; // Ensure you have this CSS file for styling

const testimonials = [
  { message: "This is an amazing service. Highly recommend!", name: "Arushi Srivastava" },
  { message: "The team did an outstanding job for our marriage event!", name: "Arpita Sharma" },
  { message: "Professional and perfect work for my niece's wedding.", name: "Sudhir Das" },
  { message: "Absolutely loved the decor and arrangements!", name: "Rohan Mehra" },
  { message: "They made our corporate event a huge success!", name: "Ananya Singh" },
  { message: "Wonderful experience, great staff!", name: "Mohit Gupta" },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextGroup = () => {
    setStartIndex((prevStartIndex) => (prevStartIndex + 4) % testimonials.length);
  };

  const prevGroup = () => {
    setStartIndex((prevStartIndex) => (prevStartIndex - 4 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextGroup(); // Automatically move to the next group every 5 seconds
    }, 5000);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [startIndex]); // Including startIndex in the dependency array ensures the interval is reset when the user navigates manually

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 4).concat(testimonials.slice(0, Math.max(0, 4 - (testimonials.length - startIndex))));

  return (
    <div className="testimonials-container">

        <h1>Testimonials</h1>
      <div className="testimonials">
        {visibleTestimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.message}"</p>
            <p>- {testimonial.name}</p>
          </div>
        ))}
      </div>
      <div className="navigation">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={startIndex === index ? "dot active" : "dot"}
            onClick={() => setStartIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
