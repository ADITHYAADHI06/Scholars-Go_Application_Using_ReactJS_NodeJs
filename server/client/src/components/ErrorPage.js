import React from "react";
import "../App.css";
import errorimg from "./images/errorpage404.jpg";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="NotFound d-flex justify-content-center">
        <div className="row p-0 d-flex justify-content-center error">
        <div className="col-11 text-center col-sm-10 col-md-10">

        <h1 className="mt-5">404 Not found Error</h1>
          <img src={errorimg} className=" img-fluid" alt="eror"></img>

          <div className="Go-back-div">
            <NavLink  className="GO-BACK" to="/">
                GO BACK
            </NavLink>

          </div>
        </div>
         
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
