import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../App.css";
import signup from "./images/Chat_PNG.png";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

import { UserContext } from "../App"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { state, dispatch } = useContext(UserContext);

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

    // res in pending state we can get that data in by using res.json();
    const data = await res.json();
    //  console.log(res.status);

    if (res.status === 400 || !data) {
      window.alert("Invalid Creadentials");
    } else {
      dispatch({ type: "USER", payload: true });
      // type is name for the action that is going perfrom in reducer
      // its like msg we are sending
      window.alert(" Login Successful ");
      navigate("/");
    }
  };
  return (
    <div className="Login container-fluid">
      <div className="row my-5 mt-md-0 d-flex justify-content-center">
        <div className=" col-10  col-sm-8 col-md-7  mt-md-5">
          <div className="row d-flex justify-content-around signup-box p-md-5">
            <div className="col-10  col-md-5 text-center ">
              <figure>
                <img src={signup} className="img-fluid mt-4 mt-md-0 login-sm-img" alt="signup" />
              </figure>
              <NavLink
                to="/signup"
                className=" ms-md-4 NewAccount text-dark text-center ">
                Create an Account
              </NavLink>
            </div>
            <div className="col-10 col-md-5 py-3 p-sm-3 p_x-0 p-md-3 d-flex justify-content-center flex-column ">
              <h3 className="mb-3">SIGN IN</h3>
              <form method="POST" >
                <div className="mb-2 d-flex">
                  <label htmlFor="Email" className="icon">
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
                    placeholder="Your email"
                  />
                </div>

                <div className="mb-2 d-flex">
                  <label htmlFor="Password" className="icon">
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
  );
};

export default Login;
