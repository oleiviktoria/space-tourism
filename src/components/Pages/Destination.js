import React, { useState } from "react";
import NavBar from "../NavBar";
import Container from "./Container";

import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import titan from "../../assets/destination/image-titan.png";
import europa from "../../assets/destination/image-europa.png";

function Destination({ data }) {
  const images = [moon, mars, europa, titan];

  const [planet, setPlanet] = useState(data[0].name.toUpperCase());
  const [planetDescription, setPlanetDescription] = useState(
    data[0].description
  );
  const [planetDistance, setPlanetDistance] = useState(
    data[0].distance.toUpperCase()
  );
  const [planetTravel, setPlanetTravel] = useState(
    data[0].travel.toUpperCase()
  );
  const [activeId, setActiveId] = useState(0);
  const [imagesAsData, setImagesAsData] = useState(images[0]);

  function planetChange(index) {
    setPlanet(data[index].name.toUpperCase());
    setPlanetDescription(data[index].description);
    setPlanetDistance(data[index].distance);
    setPlanetTravel(data[index].travel);
    setActiveId(index);
    setImagesAsData(images[index]);
  }

  return (
    <div className="destination-container container">
      <NavBar />
      <Container>
        <div className="destination">
          <div className="planet-welcome">
            <h5 className="welcome-text">01 PICK YOUR DESTINATION</h5>
            <img src={imagesAsData} alt="planet" className="planet-img" />
          </div>

          <div className="planet">
            <ul>
              {data.map((name, index) => (
                <li
                  key={index}
                  className={activeId === index ? "planet-active" : null}
                >
                  <button onClick={() => planetChange(index)}>
                    {data[index].name.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>

            <div>
              <h2 className="planet-name">{planet}</h2>
              <p className="planet-disc">{planetDescription}</p>
            </div>

            <div className="planet-info">
              <div className="planet-distance">
                <span className="planet-text">AVG. DISTANCE</span>
                <span className="planet-dist-time">{planetDistance}</span>
              </div>
              <div className="planet-time">
                <span className="planet-text">EST. TRAVEL TIME</span>
                <span className="planet-dist-time">{planetTravel}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Destination;
