import React from 'react';
import '../css/Services.css';
import Navbar from '../components/Header/Navbar';
import Destination_Event from './Sub-Services-Components/Destination_Event';
import Special_Occasion from './Sub-Services-Components/Special_Occasion';
import Charity_Event from './Sub-Services-Components/Charity_Events';
import Corporate_Event from './Sub-Services-Components/Corporate_Event';
import Wedding_Planning from './Sub-Services-Components/Wedding_Planning';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Service = () => {
  return (
    <div>
      <Navbar />
      <div className='Main_Heading_Services'>
        <h1>Services</h1>
      </div>

      <div>
      <br />
        <br />
        <div className="event-section">
          <h1>Dedicated to Exquisite Craftsmanship</h1>
          <p>
          Event Evoke is a comprehensive event design and planning agency located in Montclair, New Jersey. With a legacy spanning over 25 years, we have collaborated with couples, families, executives, and organizations to craft bespoke events characterized by exceptional energy, integrity, and meticulous attention to detail. From weddings to corporate gatherings to family milestones, we specialize in realizing your distinct vision, infusing it with creativity, seasoned expertise, and a network of premier vendors. Whether your event takes place in your hometown, across the Hudson, or across continents, our team is prepared to traverse any distance to deliver an unforgettable experience for you and your guests.
          </p>
          <br />
        </div>
        <br />
        <br />

        <Corporate_Event />
        <br />
        <br />
        <div className="event-section">
          <h1>Crafting exceptional corporate events is our specialty </h1>
          <p>
            Enhance shareholder value. Leave a lasting impression on your guests. Ensure your event captivates attention. Whether orchestrating a conference, team-building initiative, or holiday festivity, Event Evoke expertly tailors each corporate event to embody your organization's distinct identity, clientele, and reputation.
          </p>
          <br />
          <p>
            By delving deep into a company's vision and requirements, we curate brand-enhancing moments from inception to conclusion. From handpicking vendors and overseeing budgets to seamlessly integrating your brand into every facet, we prioritize understanding what holds utmost significance and how to translate those elements into reality. This is why leading corporations, foundations, and professional associations rely on Event Evoke to create experiences that resonate long after the event concludes
          </p>
          <Link to="/corporate-event" className="read-more">READ MORE...</Link>
        </div>
        <br />
        <br />

        <Wedding_Planning />
        <br />
        <br />
        <div className="event-section">
          <h1>Crafting Your Ideal Wedding Experience  </h1>
          <p>
            As your dedicated wedding planner, the Event Evoke team is committed to bringing your vision to life, meticulously planning and executing every moment just as you've imagined. We understand the importance of maximizing your budget to exceed your expectations.
          </p>
          <br />
          <p>
            From selecting the perfect venue to arranging entertainment and coordinating bridal party hair and makeup for the big day, we serve as your singular point of contact, ensuring a stress-free experience. With our extensive network of top-tier vendor partners worldwide, we guarantee that your wedding reflects your unique style, culture, and personality, setting the stage for one of the most significant celebrations of your life.
          </p>
          <Link to="/wedding-planning" className="read-more">READ MORE...</Link>
        </div>
        <br />
        <br />


        <Charity_Event />
        <br />
        <br />
        <div className="event-section">
          <h1>Uniting passionate individuals for a shared cause  </h1>
          <p>
            In the contemporary landscape, philanthropy and community involvement hold unprecedented significance. Event Evoke is committed to assisting non-profit organizations of all scales in hosting charity events that provide aid to those in need while maintaining cost-effectiveness and surpassing expectations.
          </p>
          <br />
          <p>
            Organizing a charity event entails a myriad of elements to contemplate and synchronize. From the initial conceptualization to on-the-day management, Event Evoke collaborates with you to meticulously design, produce, and execute every aspect, allowing you to dedicate your time to your cause and your attendees. We collaborate with top-tier professionals across the industry — from venue selection to catering to décor — each specializing in their respective fields, ensuring that your non-profit fundraiser, gala, or alumni weekend becomes an unforgettable affair.
          </p>
          <Link to="/charity-events" className="read-more">READ MORE...</Link>
        </div>
        <br />
        <br />

        <Destination_Event />
        <br />
        <br />
        <div className="event-section">
          <h1>Transforming Your Dream Destination Event into Reality</h1>
          <p>
            From the bustling streets of New York City to the serene shores of the Caribbean and the enchanting landscapes of European destinations, Event Evoke has orchestrated events worldwide for couples, corporations, and families commemorating significant milestones. And we streamline the process for you.
          </p>
          <br />
          <p>
            When you entrust your event to Event Evoke, anticipate seamless event planning and innovative execution — irrespective of the distance. We are prepared to journey anywhere to assist you in discovering the ideal setting for business or pleasure. Collaborating with a global network of top professionals across the event planning and entertainment industries, we ensure that your vision is matched with the very best talent available. Allow us to craft an experience that you and your guests will cherish for a lifetime.
          </p>
          <Link to="/destination-event" className="read-more">READ MORE...</Link>
        </div>
        <br />
        <br />

        <Special_Occasion />
        <br />
        <br />
        <div className="event-section">
          <h1>Honoring life's most cherished occasions </h1>
          <p>
            Leave the intricacies to us while you revel in the day's joy. Event Evoke has meticulously planned, curated, and executed family reunions, bar and bat mitzvahs, and milestone celebrations across the tri-state area, West Coast, and beyond, enabling our clients to fully immerse themselves in the moment with their loved ones.
          </p>
          <br />
          <p>
            We will collaborate closely with you to supervise every facet, providing access to premier professionals and venues for your event, regardless of its location. Moreover, count on us to infuse each event with personalized touches and meaningful details, ensuring that it resonates with the unique essence of your family.
          </p>
          <Link to="/special-occasion" className="read-more">READ MORE...</Link>
        </div>
        <br />
        <br />
      </div>
      <Footer/>
    </div>
  );
  }

  export default Service;