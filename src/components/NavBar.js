import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const navData = [
    { link: "/", text: "00 HOME" },
    { link: "/destination", text: "01 DESTINATION" },
    { link: "/crew", text: "02 CREW" },
    { link: "/technology", text: "03 TECHNOLOGY" },
  ];

  let { pathname } = useLocation();

  function getNavItemClasses(path) {
    return `nav-item${pathname === path ? " nav-active" : ""}`;
  }

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
        <ul className="nav-items">
          {navData.map((name, index) => (
            <li key={index} className={getNavItemClasses(name.link)}>
              <Link to={name.link} className="nav-links">
                {name.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
