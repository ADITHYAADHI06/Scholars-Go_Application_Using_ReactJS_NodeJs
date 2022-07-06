import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import logo from "./images/Logo_MERNSTACK .png";
// import header_main from "./images/header_main.jpg";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg py-2  navbar-light  bg-transperent Navbr">
        <div className="container-fluid">
          <NavLink className="navbar-brand p-0" to="#">
            <img src={logo} className="ms-4 logo" alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/study"
                >
                  Study Materials
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/Login"
                >
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/signup"
                >
                  Registration
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/logout"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
