import React, { useState } from "react";
import NavBar from "../NavBar";
import Container from "./Container";

import vehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import capsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import spaceport from "../../assets/technology/image-spaceport-portrait.jpg";

function Technology({ data }) {
  const images = [vehicle, spaceport, capsule];

  const [name, setName] = useState(data[0].name.toUpperCase());
  const [description, setDescription] = useState(data[0].description);
  const [image, setImage] = useState(data[0].images.portrait);
  const [activeId, setActiveId] = useState(0);
  const [imagesAsData, setImagesAsData] = useState(images[0]);

  function technologyChange(index) {
    setDescription(data[index].description);
    setName(data[index].name.toUpperCase());
    setImage(data[index].image);
    setActiveId(index);
    setImagesAsData(images[index]);
  }

  return (
    <div className="technology-container container">
      <NavBar />
      <Container>
        <div className="technology">
          <div className="technology-description">
            <h5 className="welcome-text welcome-text2">03 SPACE LAUNCH 101</h5>

            <div className="tech_text">
              <ul className="welcome-ul">
                {data.map((name, index) => (
                  <li key={index}>
                    <button
                      onClick={() => technologyChange(index)}
                      className={activeId === index ? "tech-active" : null}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="technology-text">
                <h5>THE TERMINOLOGY...</h5>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <img src={imagesAsData} alt="technology" className="technology-img" />
        </div>
      </Container>
    </div>
  );
}

export default Technology;
