import React from "react";
import "../../css/Sub-Services.css/Wedding_Planning.css";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const Wedding_Planning = () => {
  return (
    <div>
      <Navbar />
      <div className="Main_Heading_Wedding_Planning">
        <h1>Wedding Plannning</h1>
      </div>

      <br />
      <br />
      <div className="event-section">
        <h1>Your only responsibility: Saying "I do" </h1>
        <p>
          When it comes to celebrating your love, Event Evoke ensures that your
          dream wedding unfolds flawlessly. Whether envisioning a grand
          spectacle or an intimate garden affair, our team of wedding planning
          experts crafts bespoke experiences that epitomize each couple's style,
          culture, and individuality during this monumental celebration of their
          union.
        </p>

        <br />
        <h3>THE PERFECT MATCH </h3>

        <p>
          A wedding is a significant investment, often the culmination of
          lifelong dreams, where every detail is meticulously tailored to match
          your vision. As your dedicated wedding planner, the Event Evoke team
          serves as your adept ally, ensuring that every moment is orchestrated
          to perfection, surpassing your expectations while maximizing your
          budget. Together, we'll delve into your aspirations, requirements, and
          budget, collaborating to bring your envisioned wedding day to life in
          the most remarkable manner possible.
          <br />
          <br />
          Our concierge approach to wedding planning alleviates the burden on
          busy couples and families, serving as a convenient single point of
          contact for all facets of the celebration. From venue selection and
          management to transportation, entertainment, guest amenities, and even
          bridal party hair & makeup for the big day, we handle it all.
          Alternatively, if you prefer to oversee specific aspects, we're more
          than happy to accommodate your preferences while managing the rest.
          <br />
          <br />
          Over the years, we've cultivated an extensive network of trusted
          vendor partners worldwide. Whether planning a wedding in New Jersey,
          New York City, or an exotic destination, we handle the intricate
          details, ensuring that every moment leading up to your wedding day is
          joyous and stress-free.
        </p>
        <br />

        <h3>LET US HANDLE THE DETAILS </h3>
        <br />

        <p>
          Weddings symbolize the union of two distinct individuals and families,
          and your special day should reflect that uniqueness. It's the finer
          details that create indelible memories for your guests. We infuse
          creative elements – be it lavish décor or subtle accents and textures
          – that resonate with your personal style and preferences, setting the
          ambiance and elevating your wedding to a league of its own.
        </p>
      </div>
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default Wedding_Planning;
