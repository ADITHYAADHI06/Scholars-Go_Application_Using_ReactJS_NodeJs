import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import home_main from "./images/HOME_IMG_MAIN.jpg";
import HeroImg from "./images/hero.png"
import PYTHON_HOME_ICON from "./images/PYTHON_HOMEIMG-removebg.png";
import JAVA_HOME_ICON from "./images/JAVA_HOMEIMG-removebg-preview.png";
import JAVASCRIPT_HOME_ICON from "./images/JS_HOMEIMG-removebg-preview.png";
import CPlus_HOME_ICON from "./images/c++.png";
import DSA_HOME_ICON from "./images/DSA_homeimg.png";
import Coding_HOME_ICON from "./images/coding_homeimg.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const myStyle = {
    backgroundImage: `url(${home_main})`,
    paddingBottom: "10px",
    //  marginTop: "-72px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const [userData, setUserData] = useState({});

  const callData = async () => {

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

    }
    catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    callData();
  }, []);


  const callAboutPage = async (e) => {
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

      // console.log(data);
      if (data) {
        console.log(e.target.outerText);
        navigate(`/study/${e.target.outerText}`);
      }
    } catch (e) {
      console.log(e);
      navigate("/Login");
    }
  };

  return (
    <div style={myStyle} className="pb-5">

      <div className="Home row p-0 pt-5 pb-4 m-0 ms-3 ms-md-5">
        <div className="col-10  col-md-8 mt-3">
          <h1>{!userData.name ? `Scholars Go` : `Welcome ${userData.name}`}</h1>
          <p>{!userData.name ? `Everything you need to crack your next Interview.You get the access to all type of premium And free contents, Placements materials, guides and more` : `Hi\u00A0${userData.name}\u00A0, Supercharge your reading experience .In this platfrom You geting the access to all type of premium And free content`}</p>

          <div>
            <NavLink to="/study" className="btn hireme-btn">
              start learning
            </NavLink>
          </div>

        </div>
      </div>


      <div className="row px-0 mx-0 ms-md-5 d-flex justify-content-center justify-content-md-start">
        <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-start ms-0 pe-0">
          <img src={HeroImg} className="img-fluid heroImg" alt="heroimg"></img>
        </div>

        <div className="col-12 col-md-5 Home_Card">
          <p className="mt-0 mb-3 ">Get Access :</p>
          <div className="row d-flex justify-content-center  justify-content-md-start">

            <div className="col-9 col-sm-8 col-md-5 m-0 mb-3 mb-md-0 p-0  flex-column">

              <div onClick={callAboutPage} className="row Home_cards mb-3 mx-0 me-md-1 flex-row">
                <div className="col-3 m-0 p-0 left float-left">
                  <img src={PYTHON_HOME_ICON} className="img-fluid  home_course_icons" alt="heroimg"></img>
                </div>
                <div className="col-5 m-0 ms-3 ms-sm-5 ms-md-3 p-0 right">Python</div>
              </div>

              <div onClick={callAboutPage} className="row Home_cards mb-3 mx-0 me-md-1 flex-row">
                <div className="col-3 m-0 p-0 left float-left">
                  <img src={JAVA_HOME_ICON} className="img-fluid home_course_icons" alt="heroimg"></img>
                </div>
                <div className="col-5 m-0 ms-3 ms-sm-5 ms-md-3  p-0 right">JAVA</div>
              </div>

              <div onClick={callAboutPage} className="row Home_cards mx-0 me-md-1   flex-row">
                <div className="col-3 m-0 p-0 left float-left">
                  <img src={JAVASCRIPT_HOME_ICON} className="img-fluid home_course_icons" alt="heroimg"></img>
                </div>
                <div className="col-5 m-0 ms-3 ms-sm-5 ms-md-3 p-0 right">JAVASCRIPT</div>
              </div>

            </div>

            <div onClick={callAboutPage} className="col-9 col-sm-8 col-md-5 m-0 p-0 m-md-0 ms-md-2">

              <div className="row Home_cards mx-0  mb-3 flex-row">
                <div className="col-3 m-0  p-0 left float-left">
                  <img src={Coding_HOME_ICON} className="img-fluid home_course_icons" alt="heroimg"></img>

                </div>
                <div className="col-5 m-0 ms-3  ms-sm-5 ms-md-3 p-0 right">Interview</div>
              </div>

              <div onClick={callAboutPage} className="row Home_cards mx-0  mb-3 flex-row">
                <div className="col-3 m-0 p-0 left float-left">
                  <img src={CPlus_HOME_ICON} className="img-fluid home_course_icons" alt="heroimg"></img>

                </div>
                <div className="col-5 m-0 ms-3  ms-sm-5 ms-md-3 p-0 right">Apptitude</div>
              </div>

              <div onClick={callAboutPage} className="row Home_cards mx-0   flex-row">
                <div className="col-3 m-0 p-0 left float-left">
                  <img src={DSA_HOME_ICON} className="img-fluid home_course_icons" alt="heroimg"></img>

                </div>
                <div className="col-5 m-0 ms-3  ms-sm-5 ms-md-3 p-0 right">DSA</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
