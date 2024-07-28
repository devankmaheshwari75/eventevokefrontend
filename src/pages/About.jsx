import React from 'react';
import '../css/About.css';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="Main_Heading_About_Us">
        <h1>About Us!</h1>
      </div>
    <div className="about">
      <div className="about__intro">
        <h3 className="about__intro-heading">About</h3>
        <hr className="about__intro-line" />
        <h1 className="about__intro-main-heading">WHO WE ARE</h1>
        <p>Welcome to EventEvoke, a visionary leader in wedding planning since 2010. Located in the heart of Delhi, we've established our reputation for creating not just weddings, but captivating experiences that leave a lasting impression.</p>
      </div>
      <div className="about__content">
        <div className="about__section">
          <h2>Our Dynamic Journey</h2>
          <p>Fueled by a dynamic and driven team, EventEvoke is a hub for innovative wedding concepts. Our youthful and energetic members have left their mark, orchestrating over 100 weddings across India with unparalleled finesse.</p>
        </div>
        <div className="about__section">
          <h2>Unveiling Extraordinary</h2>
          <p>EventEvoke serves as your comprehensive sanctuary, where we embrace every aspect of your wedding, taking full ownership of each element. Our dedication extends beyond mere planning; it's about crafting a narrative that resonates with your unique love story.</p>
        </div>
        <div className="about__section">
          <h2>Personalized Perfection</h2>
          <p>We redefine perfection by intricately weaving personalized details into every moment, ensuring that each aspect is a masterpiece. Your day is sculpted, curated, and executed to absolute perfection — a celebration tailored exclusively for you.</p>
        </div>
        <div className="about__section">
          <h2>Designing Unforgettable Memories</h2>
          <p>At the heart of EventEvoke lies a passionate team that defies conventional design, translating your vision into a tangible reality. We firmly believe in crafting events that reverberate through the halls of memory, where your dreams find a splendid reality.</p>
        </div>
        <div className="about__section">
          <h2>Memories in the Making</h2>
          <p>"The best thing about memories is making them," and this ethos defines us. Our enthusiastic team breathes life into your events, orchestrating, organizing, and executing with a touch that reflects your style and personality.</p>
        </div>
        <div className="about__section">
          <h2>The Magical Aura</h2>
          <p>We bring dreams to life, infusing your special day with a magical charm that captivates for a lifetime. For us, it's not just a day; it's a canvas for magic and charisma.</p>
        </div>
        <div className="about__section">
          <h2>Your Day, Your Dream, Our Reality</h2>
          <p>"It’s your Day, your Dream, We just make it happen!!" At EventEvoke, we don't just plan weddings; we orchestrate dreams, transforming your special day into an everlasting enchantment. Join us on a journey where every detail is a brushstroke, and every moment, a masterpiece.</p>
        </div>
      </div>
      <div className="about__team">
        <h3>Our Team</h3>
        <hr />
        <div className="about__team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h4>Atif Aslam</h4>
            <p>Wedding Planner</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h4>Arjit Singh</h4>
            <p>Event Coordinator</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h4>Tonny Kakkar</h4>
            <p>Design Specialist</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 4" />
            <h4>Dhinchak Pooja</h4>
            <p>Logistics Manager</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 5" />
            <h4>Salman Boi</h4>
            <p>Marketing Director</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default About;
