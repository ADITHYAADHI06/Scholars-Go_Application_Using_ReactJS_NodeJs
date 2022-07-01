import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../App.css";
import signup from "./images/Social_media_adv_PNG.png";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LockIcon from "@mui/icons-material/Lock";
import WorkIcon from "@mui/icons-material/Work";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  // to nagivate  we r creating the instance of useHistory()
  const navigate = useNavigate();

  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const inputHandlers = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  };

  //! we are sending data to Register route....
  const POSTDATA = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    // our front is working on port number 3000 and backend on 4000
    // in this we are trying to send the data to register route frist
    // it will look for register route in client  after it will look in
    // defined proxy addres in pakage.json file.

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      // {"name":"test","email":"test1@gmail.com","phone":"123","work":"wev","password":"123","cpassword":"123"}
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        work: work,
        password: password,
        cpassword: cpassword,
      }),
    });

    // console.log(res);

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("invalid registration");
      console.log("invalid registration");
    } else {
      window.alert(" registration successfull u can login");
      console.log(" registration success");

      // https://create-react-app.dev/docs/proxying-api-requests-in-development/
      // we need set the procxy sever to backend

      // setuser({
      //   name: "",
      //   email: "",
      //   phone: "",
      //   work: "",
      //   password: "",
      //   cpassword: "",
      // });
      navigate("/Login");
    }
  };

  return (
    <div className="signup ">
      <div className="row conatin">
        <div className="col-md-8 col-10 mt-md-5">
          <div className="signup-box p-md-5">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-5 col-12">
                <h3 className="mb-3">SIGN UP</h3>
                <form method="POST">
                  <div className="mb-2 formGroup">
                    <label for="Name" className="icon">
                      <PersonIcon />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={user.name}
                      onChange={inputHandlers}
                      id="exampleInputText1"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-2 formGroup">
                    <label for="Email" className="icon">
                      <EmailIcon />
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="email"
                      value={user.email}
                      onChange={inputHandlers}
                      aria-describedby="emailHelp"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-2 formGroup">
                    <label for="Call" className="icon">
                      <CallIcon />
                    </label>
                    <input
                      type="Number"
                      className="form-control"
                      name="phone"
                      value={user.phone}
                      onChange={inputHandlers}
                      id="exampleInputPhonenumber1"
                      placeholder="Phonenumber"
                    />
                  </div>
                  <div className="mb-2 formGroup">
                    <label for="proffesions" className="icon">
                      <WorkIcon />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="work"
                      value={user.work}
                      onChange={inputHandlers}
                      id="exampleInputPassword1"
                      placeholder="Profession"
                    />
                  </div>
                  <div className="mb-2 formGroup">
                    <label for="cpassword" className="icon">
                      <LockIcon />
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={user.password}
                      onChange={inputHandlers}
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-2 formGroup">
                    <label for="cpassword" className="icon">
                      <LockIcon />
                    </label>
                    <input
                      type="password"
                      name="cpassword"
                      className="form-control"
                      value={user.cpassword}
                      onChange={inputHandlers}
                      id="exampleInputPassword1"
                      placeholder="Confirm your password"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      value="Register"
                      type="submit"
                      name="submit"
                      onClick={POSTDATA}
                      className="ms-2 btn1"
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