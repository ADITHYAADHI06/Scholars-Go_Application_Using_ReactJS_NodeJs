import React from "react";
import profile_pic from "./images/profile_pic.jpeg";

const About = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <form method="">
          <div className="row user-profile margin p-5">
            <div className="col-md-5 ps-0">
              <img src={profile_pic} className="user_img" alt="" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>adithya shetty</h5>
                <h6>web developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS: <span>1/10</span>
                </p>

                <div>
                  <h5 className="about_heading">About</h5>
                  <div className="Data">
                    <div className="row">
                      <div className="col-md-5">
                        <p>User id:</p>
                        <p>Name:</p>
                        <p>Email:</p>
                        <p>Profession:</p>
                        <p>Phone number:</p>
                      </div>
                      <div className="col-md-6">
                        <p>#23hfh54236hhj4r44</p>
                        <p>Adithya shetty</p>
                        <p>adishetty102@gmail.com</p>
                        <p>Web developer</p>
                        <p>+91 8496952366</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-2 ">
              <span className="badge rounded-5 bg-success ms-5 py-2">User</span>
            </div> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
