import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import signup from "./images/Social_media_adv_PNG.png";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LockIcon from "@mui/icons-material/Lock";
import WorkIcon from "@mui/icons-material/Work";
const Registration = () => {
  return (
    <div className="signup ">
      <div className="row conatin">
        <div className="col-md-8 col-10 mt-md-5">
          <div className="signup-box p-md-5">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-5 col-12">
                <h3 className="mb-3">SIGN UP</h3>
                <form>
                  <div class="mb-2 formGroup">
                    <label for="Name" className="icon">
                      <PersonIcon />
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputText1"
                      placeholder="Your name"
                    />
                  </div>
                  <div class="mb-2 formGroup">
                    <label for="Email" className="icon">
                      <EmailIcon />
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Your Email"
                    />
                  </div>
                  <div class="mb-2 formGroup">
                    <label for="Call" className="icon">
                      <CallIcon />
                    </label>
                    <input
                      type="Number"
                      class="form-control"
                      id="exampleInputPhonenumber1"
                      placeholder="Phonenumber"
                    />
                  </div>{" "}
                  <div class="mb-2 formGroup">
                    <label for="proffesions" className="icon">
                      <WorkIcon />
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Profession"
                    />
                  </div>
                  <div class="mb-2 formGroup">
                    <label for="cpassword" className="icon">
                      <LockIcon />
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="mb-2 formGroup">
                    <label for="cpassword" className="icon">
                      <LockIcon />
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Confirm your password"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      value="Register"
                      type="submit"
                      name="submit"
                      class="ms-2 btn1"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-5 col-12">
                <figure>
                  <img src={signup} className=" " alt="signup" />
                </figure>
                <NavLink to="/Login" className="ms-md-4 text-dark text-center ">
                  I am already Register
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
