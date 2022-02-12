import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </div>
        {/* <div className="decorate"></div> */}
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              00 HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/destination" className="nav-links">
              01 DESTINATION
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/crew" className="nav-links">
              02 CREW
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/technology" className="nav-links">
              03 TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
