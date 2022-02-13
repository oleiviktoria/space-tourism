import React, { useState } from "react";
import NavBar from "../NavBar";

function Crew({data}) {
  const [role, setRole] = useState(data[0].role.toUpperCase());
  const [name, setName] = useState(data[0].name.toUpperCase());
  const [bio, setBio] = useState(data[0].bio);

  function crewChange(index) {
    setRole(data[index].role.toUpperCase());
    setName(data[index].name.toUpperCase());
    setBio(data[index].bio);
  }

  return (
  <div className="crew-container">
      <NavBar />
      <div className="crew">
        <div className="crew-welcome">
          <h5 className="welcome-text">02 MEET YOUR CREW</h5>
          <h4>{role}</h4>
          <h3>{name}</h3>
           <p>{bio}</p>
           <ul>
            {data.map((name, index) => (
              <li key={index}>
                <button onClick={() => crewChange(index)}>
                  
                </button>
              </li>
            ))}
          </ul>
        </div>
  <div className="crew-img">     <img
              src={require("../../assets/crew/image-douglas-hurley.png")}
              alt="planet"
            /></div>
      </div>
 
      </div>
  )
}

export default Crew;
