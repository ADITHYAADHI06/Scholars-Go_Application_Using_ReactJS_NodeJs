import React from "react";
import "../App.css";
import errorimg from "./images/errorpage404.jpg";

const ErrorPage = () => {
  return (
    <>
      <div className="NotFound">
        <div className="error">
          <h1 className="mt-5">404 Not found Error</h1>
          <img src={errorimg} className="mt-4" alt="eror"></img>

          <div className="Go-back-div">
            <a href="#" className="GO-BACK">
              GO BACK
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
