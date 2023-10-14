import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <>
      <nav className="navbar">
        <span className="logo">
          Servent<span className="yellow">O</span>
        </span>
        <span>.com</span>
        <span className="links">
          <ul>
            <li>
              <Link style={linkStyle} to="#">
                Home
              </Link>
            </li>
            <li>
              <Link style={linkStyle} to="">
                Services
              </Link>
            </li>
            <li>
              <Link style={linkStyle} to="#">
                Find Work
              </Link>
            </li>
            <li>
              <Link style={linkStyle} to="#">
                Contract
              </Link>
            </li>
            <li>
              <Link style={linkStyle} to="#">
                Find
              </Link>
            </li>
            <li>
              <Link style={linkStyle} to="#">
                Hire Me
              </Link>
            </li>
          </ul>
        </span>
      </nav>
    </>
  );
};

export default Navbar;
