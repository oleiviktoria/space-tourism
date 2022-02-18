import React from "react";
import NavBar from "../NavBar";
import Container from "./Container";

function Home() {
  return (
    <div className="home-container">
      <NavBar />
      <Container>
        <div className="home">
          <div className="home-welcome">
            <h5 className="welcome-text">SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="circle-container">
            <button className="circle">EXPLORE</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
