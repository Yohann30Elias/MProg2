import React, { useState, useEffect } from "react";
import "../style/Pfungen.css";

// Images for the carousel
import Image1 from "../bilder/5my9Z0_d4Vw9LqaLN-nLZG.webp";
import Image2 from "../bilder/5my9Z0_d4Vw9LqaLN-nLZG.webp";
import Image3 from "../bilder/5my9Z0_d4Vw9LqaLN-nLZG.webp";

function Pfungen() {
  const images = [
    Image1,
    Image2,
    Image3,
    Image1,
    Image2,
    Image3,
    Image1,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Switch image every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const contentBlocks = [
    {
      title: "Eskimo",
      text: "Wenn man in Pfungen über Eskimo spricht, denken viele sofort an die Zeit, als hier noch die bekannten Eskimo-Decken hergestellt wurden. Es war ein wichtiger Teil unseres Dorfes und hat viele Familien über Generationen hinweg geprägt. Heute ist das ehemalige Fabrikgelände ein lebendiges Industrie- und Gewerbegebiet. Aber für uns Pfungener bleibt Eskimo mehr als nur ein Ort – es ist ein Stück Geschichte und ein Teil unserer Identität.",
      image: "TESTBILD 1",
    },
    {
      title: "Ziegelei",
      text: "Die Ziegelei in Pfungen war einst ein bedeutender Produktionsstandort für Baumaterialien, insbesondere Ziegel. Im 19. und 20. Jahrhundert wurden hier hochwertige Backsteine hergestellt, die für den regionalen Bau verwendet wurden. Das Gelände um die Ziegelei war geprägt von der Tongewinnung, die direkt vor Ort stattfand. Nach der Schließung der Ziegelei hat sich das Areal verändert und wird heute unterschiedlich genutzt. Dennoch bleibt die Ziegelei ein wichtiger Teil der industriellen Vergangenheit von Pfungen und ein Symbol für die Entwicklung des Dorfes.",
      image: "TESTBILD 2",
    },
    {
      title: "Title 3",
      text: "This is the unique description for Pfungen field 3.",
      image: "TESTBILD 3",
    },
    {
      title: "Title 4",
      text: "This is the unique description for Pfungen field 4.",
      image: "TESTBILD 4",
    },
    {
      title: "Title 5",
      text: "This is the unique description for Pfungen field 5.",
      image: "TESTBILD 5",
    },
    {
      title: "Title 6",
      text: "This is the unique description for Pfungen field 6.",
      image: "TESTBILD 6",
    },
    {
      title: "Title 7",
      text: "This is the unique description for Pfungen field 7.",
      image: "TESTBILD 7",
    },
    {
      title: "Title 8",
      text: "This is the unique description for Pfungen field 8.",
      image: "TESTBILD 8",
    },
    {
      title: "Title 9",
      text: "This is the unique description for Pfungen field 9.",
      image: "TESTBILD 9",
    },
    {
      title: "Title 10",
      text: "This is the unique description for Pfungen field 10.",
      image: "TESTBILD 10",
    },
  ];

  return (
    <div className="pfungen-page">
      <div className="carousel-container">
        <div className="carousel-slide">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
      </div>
      <div className="content">
        {contentBlocks.map((block, index) => (
          <div
            className={`content-row ${index % 2 === 0 ? "row-reverse" : ""}`}
            key={index}
          >
            <div className="content-box">
              <h2>{block.title}</h2>
              <p>{block.text}</p>
            </div>
            <div className="content-box image-box">{block.image}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pfungen;
