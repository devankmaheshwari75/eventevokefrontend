import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Form } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Services from './pages/Services';
import Wedding_Planning from './pages/Sub-Services-Pages/Wedding_Planning';
import Corporate_Event from './pages/Sub-Services-Pages/Corporate_Event';
import Destination_Event from './pages/Sub-Services-Pages/Destination_Event';
import Special_Occasion from './pages/Sub-Services-Pages/Special_Occasion';
import Charity_Events from './pages/Sub-Services-Pages/Charity_Events';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HostedEvents from './components/HostedEvents/HostEvents';
import EventDetails from './pages/EventDetails';
import Host from './pages/Host';
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/gallery" element={<Gallery />} />

        <Route exact path="/wedding-planning" element={<Wedding_Planning />} />
        <Route exact path="/corporate-event" element={<Corporate_Event />} />
        <Route exact path="/destination-event" element={<Destination_Event />} />
        <Route exact path="/special-occasion" element={<Special_Occasion />} />
        <Route exact path="/charity-events" element={<Charity_Events />} />

        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/HostEvents" element={<HostedEvents/>} />
        <Route exact path="/Hostform" element={<Host/>} />


        <Route path="/event/:eventId" component={<EventDetails/>} />


      </Routes>
    </Router> 
  );
}

export default App;
