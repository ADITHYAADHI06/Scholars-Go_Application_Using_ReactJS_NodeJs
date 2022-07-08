import React, { useEffect,useState } from "react";
import profile_pic from "./images/profile_pic.jpeg";
import Default_Userpic from "./images/Default_userPic.jpg";

import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

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
      navigate("/Login");
    }
  };

  useEffect(() => {
      callAboutPage();
  }, []);

  return (
    <>
      <div className="container d-flex justify-content-center">
        <form method="GET">
          <div className="row user-profile margin p-5">
            <div className="col-md-5 ps-0">
              <img src= {userData.name==="ADITHYA SHETTY"? profile_pic:Default_Userpic} className="user_img" alt="" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>

                <p className="profile-rating mt-3 mb-5">
                  RANKINGS : <span>1/10</span>
                </p>

                <div>
                  <h5 className="about_heading">ABOUT</h5>
                  <div className="Data">
                    <div className="row">
                      <div className="col-md-5">
                        <p>Name :</p>
                        <p>Email :</p>
                        <p>Profession :</p>
                        <p>Phone number :</p>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.name}</p>
                        <p>{userData.email}</p>
                        <p>{userData.work}</p>
                        <p>{userData.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
