import React,{useEffect,useState} from "react";
import "./Home.css";
// import home_main from "./images/home_main1.jpg";
import home_main from "./images/HOME_IMG_MAIN.jpg";

import { NavLink } from "react-router-dom";

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${home_main})`,
    height: "100vh",
    marginTop: "-72px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          // to set that application should accept json
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        // we are writing include because the cookie has to send to backend
        //  properly so that we are using that
      });
      //  we get the res

      const data = await res.json();
            // console.log(res);
      setUserData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);



  return (
    <div style={myStyle}>
      <div className="Home">
        <h1>{ !userData.name ? `We are Mern stack developers` :`Wellcome ${userData.name}`}</h1>
        <p>{ !userData.name ? `I'm Adithya Shetty. A MERN stack Developer , Innovator, Problem Solver  ` :  `Hi\u00A0${userData.name}\u00A0, Supercharge your reading experience .In this platfrom You geting the access to all type of premium And free content, These are collected from all the tech experts. You can Effectivly Make Use of this platfrom.` }</p>
        <div>
          <NavLink to={ !userData.name ? `\contact` :`\study`} className="btn hireme-btn">
          { !userData.name ?`Contact us` : `Getting Started` }  
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
