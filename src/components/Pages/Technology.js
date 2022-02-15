import React, { useState } from "react";
import NavBar from "../NavBar";

function Technology({data}) {
  
  const [name, setName] = useState(data[0].name.toUpperCase());
  const [description, setDescription] = useState(data[0].description);
  const [image, setImage] = useState(data[0].images.portrait);

  function technologyChange(index) {
    setDescription(data[index].description);
    setName(data[index].name.toUpperCase());
    setImage(data[index].image);
    console.log(index)
  }

  return (
    <div className="technology-container container ">
        <NavBar />

            <h5 className="welcome-text">03 SPACE LAUNCH 101</h5>

<div className="technology">
            <ul className="welcome-ul">
            {data.map((name, index) => (
              <li key={index}>
                <button onClick={() => technologyChange(index)}>
                {index+1}
                </button>
              </li>
            ))}
          </ul>

          <div className="technology-text">
            <h5>THE TERMINOLOGY...</h5>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>

          <img
              src={require("../../assets/technology/image-launch-vehicle-portrait.jpg")}
              alt="technology"/>
    </div>
    </div>
      )
}

export default Technology;
