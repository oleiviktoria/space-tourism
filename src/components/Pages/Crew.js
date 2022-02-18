import React, { useState } from "react";
import NavBar from "../NavBar";
import Container from "./Container";

function Crew({ data }) {
  const [role, setRole] = useState(data[0].role.toUpperCase());
  const [name, setName] = useState(data[0].name.toUpperCase());
  const [bio, setBio] = useState(data[0].bio);
  const [activeId, setActiveId] = useState();

  function crewChange(index) {
    setRole(data[index].role.toUpperCase());
    setName(data[index].name.toUpperCase());
    setBio(data[index].bio);
    setActiveId(index);
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
          <img
            src={require("../../assets/crew/image-douglas-hurley.png")}
            alt="planet"
            className="crew-img"
          />
        </div>
      </Container>
    </div>
  );
}

export default Crew;
