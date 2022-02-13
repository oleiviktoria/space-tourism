import React, { useState } from "react";
import NavBar from "../NavBar";

function Destination({ data }) {
  const [planet, setPlanet] = useState(data[0].name.toUpperCase());
  const [planetDescription, setPlanetDescription] = useState(
    data[0].description
  );
  const [planetDistance, setPlanetDistance] = useState(data[0].distance.toUpperCase());
  const [planetTravel, setPlanetTravel] = useState(data[0].travel.toUpperCase());
  const [planetImg, setPlanetImg] = useState(data[0].images.png);

  function planetChange(index) {
    setPlanet(data[index].name.toUpperCase());
    setPlanetDescription(data[index].description);
    setPlanetDistance(data[index].distance);
    setPlanetTravel(data[index].travel);
    setPlanetImg(data[index].images.png);
  }

  return (
    <div className="destination-container">
      <NavBar />
      <div className="destination">
        <div className="planet-welcome">
          <h5 className="welcome-text">01 PICK YOUR DESTINATION</h5>
          <div className="planet-img">
            <img
              src={require("../../assets/destination/image-moon.png")}
              alt="planet"
            />
          </div>
        </div>

        <div className="planet">
          <ul>
            {data.map((name, index) => (
              <li key={index}>
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
          </div></div>

        </div>
      </div>
    </div>
  );
}

export default Destination;
