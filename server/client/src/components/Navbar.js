import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import logo from "./images/Scholar_Go-2.png";
import "../App.css"
import { UserContext } from "../App"
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';


function Navbar() {
  const { state, dispatch } = useContext(UserContext);

  const [openNav, setOpenNav] = useState(false);
  // console.log(openNav);

  const NavbarToggle = () => {

    if (state) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/study">Study Materials</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/logout">Logout</NavLink>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link active " aria-current="page" to="/">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/study" >Study Materials</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/contact" >Contact</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/Login" >Login</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/signup" >Registration</NavLink>
          </li>

        </>
      );
    }
  }

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg py-2  navbar-light  bg-transperent Navbr">
        <div className="container-fluid ">
          <NavLink className="navbar-brand p-0" to="#">
            <img src={logo} className="ms-4 logo" alt="logo" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={() => { setOpenNav(!openNav) }} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon ">{(openNav) ? <IoMdClose className="closeIcon" /> : <GiHamburgerMenu className="OpenIcon" />}</span>
          </button>
          <div className="collapse  navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav collapser text-dark ms-auto p-3 p-md-0  my-3 my-md-0 mb-lg-0">
              <NavbarToggle />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
