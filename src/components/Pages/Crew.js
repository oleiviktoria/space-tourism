import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar";
import Container from "./Container";

import douglas from "../../assets/crew/image-douglas-hurley.png";
import ansari from "../../assets/crew/image-anousheh-ansari.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";

function Crew({ data }) {
  const images = [douglas, mark, victor, ansari];

  const [role, setRole] = useState(data[0].role.toUpperCase());
  const [name, setName] = useState(data[0].name.toUpperCase());
  const [bio, setBio] = useState(data[0].bio);
  const [activeId, setActiveId] = useState(0);
  const [imagesAsData, setImagesAsData] = useState(images[0]);

  function crewChange(index) {
    setRole(data[index].role.toUpperCase());
    setName(data[index].name.toUpperCase());
    setBio(data[index].bio);
    setActiveId(index);
    setImagesAsData(images[index]);
  }

  return (
    <div className="crew-container container">
      <NavBar />
      <Container>
        <div className="crew">
          <div className="crew-text">
            <h5 className="welcome-text">02 MEET YOUR CREW</h5>
            <h4>{role}</h4>
            <h3>{name}</h3>
            <p>{bio}</p>
            <ul>
              {data.map((name, index) => (
                <li key={index}>
                  <button
                    onClick={() => crewChange(index)}
                    className={activeId === index ? "crew-active" : null}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
          <img src={imagesAsData} alt="planet" className="crew-img" />
        </div>
      </Container>
    </div>
  );
}

export default Crew;
