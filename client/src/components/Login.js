import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import signup from "./images/Chat_PNG.png";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
 
    // we are sending the data to backend(to signin route)
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    // console.log(res);
    // console.log(res);
    // res in pending state we can get that data in by using res.json();

    const data = await res.json();
    console.log(res.status);

    if (res.status === 400 || !data) {
      window.alert("Invalid creadentials");
    } else {
      window.alert(" login successfull ");
      navigate("/");
    }
  };
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
                <form method="POST">
                  <div className="mb-2 formGroup">
                    <label for="Email" className="icon">
                      <EmailIcon />
                    </label>
                    <input
                      type="email"
                      className="form-control "
                      value={email}
                      name="email"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setEmail(e.target.value);
                      }}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="mb-2 formGroup">
                    <label for="password" className="icon">
                      <LockIcon />
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        console.log(e.target.value);

                        setPassword(e.target.value);
                      }}
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>

                  <div className="mt-4">
                    <input
                      value="Log in"
                      type="submit"
                      name="submit"
                      onClick={loginUser}
                      className="ms-2 btn1"
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
