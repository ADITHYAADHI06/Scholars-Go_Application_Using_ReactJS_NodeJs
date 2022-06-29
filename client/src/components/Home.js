import React from "react";
import "./Home.css";
import home_main from "./images/home_main1.jpg";

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${home_main})`,
    height: "100vh",
    marginTop: "-72px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={myStyle}>
      <div className="Home">
        <h1>We are Mern stack developers</h1>
        <p>
          I'm Adithya Shetty. A Full stack Developer, Content creater and
          blogger. A Full stack Developer, content creater and blogger
        </p>
        <div>
          <a href="#" className="btn hireme-btn">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
