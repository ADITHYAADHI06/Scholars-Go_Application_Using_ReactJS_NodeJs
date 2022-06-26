import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import signup from "./images/Chat_PNG.png";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  return (
    <div className="Login">
      <div className="row conatin">
        {/* Left Side */}
        <div className="col-md-7 col-10 mt-md-5">
          <div className="signup-box p-md-5">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-5 text-center col-12">
                <figure>
                  <img src={signup} className=" " alt="signup" />
                </figure>
                <NavLink
                  to="/signup"
                  className="ms-md-4 text-dark text-center "
                >
                  Create an Account
                </NavLink>
              </div>
              {/* Right side Side */}

              <div className="col-md-6 col-12">
                <h3 className="mb-3">SIGN IN</h3>
                <form>
                  <div class="mb-2 formGroup">
                    <label for="Email" className="icon">
                      <EmailIcon />
                    </label>
                    <input
                      type="email"
                      class="form-control "
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Your Email"
                    />
                  </div>

                  <div class="mb-2 formGroup">
                    <label for="password" className="icon">
                      <LockIcon />
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>

                  <div className="mt-4">
                    <input
                      value="Log in"
                      type="submit"
                      name="submit"
                      class="ms-2 btn1"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
