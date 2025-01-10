import React, { useState, useEffect } from "react";
import "../style/Home.css";

// Carousel Images
import Image1 from "../bilder/5my9Z0_d4Vw9LqaLN-nLZG.webp";
import Image2 from "../bilder/5my9Z0_d4Vw9LqaLN-nLZG.webp";
import Image3 from "../bilder/5my9Z0_d4Vw9LqaLN-nLZG.webp";

function Home() {
  const images = [Image1, Image2, Image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Switch image every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="home-page">
      {/* Carousel Section */}
      <div className="carousel-container">
        <div className="carousel-slide">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <div className="content-box">
          <h2>Willkommen in Pfungen</h2>
          <p>
            Pfungen – das charmante Dorf im Grünen, eingebettet zwischen der Töss und sanften Hügeln. Unsere Gemeinde bietet eine perfekte Balance zwischen ländlicher Idylle und moderner Nähe zu den Städten Winterthur und Zürich. Erleben Sie unsere lebendige Gemeinschaft, vielfältige Freizeitmöglichkeiten und eine hohe Lebensqualität. Wir freuen uns, Sie in Pfungen willkommen zu heißen!
          </p>
        </div>
        <div className="content-box">
          <h2>Aktuelles</h2>
          <ul>
            <li>
              <span>F</span>
              <p>Dorffest</p>
            </li>
            <li>
              <span>I</span>
              <p>Gemeinde Versammlung</p>
            </li>
            <li>
              <span>F</span>
              <p>Rentner Wanderung</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
