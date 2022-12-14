import { useState, useEffect } from "react";
import { Nav, Container } from "react-bootstrap";
import envelope from "../assets/images/envelope.svg";
import github from "../assets/images/github.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import logo from "../assets/images/rb-logo.png";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          {/* logo */}
          <images src={logo} class="image3" styles="width:50px;height:60px;" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-me">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacts">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
