import React, { useState } from "react";
import "../css/Gallery.css";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const galleryImages = [
    {
      id: 1,
      category: "Decor",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1690148812608-9942834931a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      category: "Mandap",
      imageUrl:
        "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      category: "Stage",
      imageUrl:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      category: "Entrance",
      imageUrl:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      category: "Jaimala",
      imageUrl:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      category: "Decor",
      imageUrl:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  return (
    <div>
      <Navbar />
      <div className="Main_Heading_Gallery">
        <h1>Gallery</h1>
      </div>
      <div className="gallery">
        <div className="gallery__header">
          <h1>Gallery</h1>
          <hr />

          <p>Browse our stunning collection of wedding memories.</p>
          <div className="gallery__categories">
            <button
              className={selectedCategory === "All" ? "active" : ""}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            <button
              className={selectedCategory === "Decor" ? "active" : ""}
              onClick={() => setSelectedCategory("Decor")}
            >
              Decor
            </button>
            <button
              className={selectedCategory === "Mandap" ? "active" : ""}
              onClick={() => setSelectedCategory("Mandap")}
            >
              Mandap
            </button>
            <button
              className={selectedCategory === "Stage" ? "active" : ""}
              onClick={() => setSelectedCategory("Stage")}
            >
              Stage
            </button>
            <button
              className={selectedCategory === "Entrance" ? "active" : ""}
              onClick={() => setSelectedCategory("Entrance")}
            >
              Entrance
            </button>
            <button
              className={selectedCategory === "Jaimala" ? "active" : ""}
              onClick={() => setSelectedCategory("Jaimala")}
            >
              Jaimala
            </button>
          </div>
        </div>
        <div className="gallery__images">
          {filteredImages.map((image) => (
            <img
              key={image.id}
              src={image.imageUrl}
              alt={`Gallery Image ${image.id}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
