import React from "react";
import "../style/Umgebung.css";

function Umgebung() {
  const contentBlocks = [
    {
      title: "Title 1",
      text: "This is the unique description for field 1.",
      image: "TESTBILD 1",
    },
    {
      title: "Title 2",
      text: "This is the unique description for field 2.",
      image: "TESTBILD 2",
    },
    {
      title: "Title 3",
      text: "This is the unique description for field 3.",
      image: "TESTBILD 3",
    },
    {
      title: "Title 4",
      text: "This is the unique description for field 4.",
      image: "TESTBILD 4",
    },
    {
      title: "Title 5",
      text: "This is the unique description for field 5.",
      image: "TESTBILD 5",
    },
  ];

  return (
    <div className="umgebung-page">
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

export default Umgebung;
