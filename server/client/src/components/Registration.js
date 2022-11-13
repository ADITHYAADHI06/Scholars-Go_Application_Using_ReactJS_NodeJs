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
      <div className="row mx-0 d-flex justify-content-center">
        <div className="col-12 col-sm-9 col-md-7  mt-5">
          <div className="signup-box p-3 p-md-5">
            <div className="row  d-flex  justify-content-center justify-content-sm-around align-items-sm-center ">
              <div className="col-10 col-sm-9 p-0 mt-3 mt-md-0  col-md-5 ">
                <h3 className="mb-3">SIGN UP</h3>
                <form method="POST">
                  <div className="mb-2  d-flex ">
                    <label htmlFor="Name" className="icon">
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
                  <div className="mb-2  d-flex">
                    <label htmlFor="Email" className="icon">
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
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-2  d-flex">
                    <label htmlFor="Call" className="icon">
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
                  <div className="mb-2  d-flex">
                    <label htmlFor="proffesions" className="icon">
                      <WorkIcon />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="work"
                      value={user.work}
                      onChange={inputHandlers}
                      id="exampleInputWork1"
                      placeholder="Profession"
                    />
                  </div>
                  <div className="mb-2  d-flex">
                    <label htmlFor="cpassword" className="icon">
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
                  <div className="mb-2  d-flex">
                    <label htmlFor="cpassword" className="icon">
                      <LockIcon />
                    </label>
                    <input
                      type="password"
                      name="cpassword"
                      className="form-control"
                      value={user.cpassword}
                      onChange={inputHandlers}
                      id="exampleInputCPassword1"
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
              <div className="col-8 mt-3 mt-md-0 col-md-5 text-center ">
                <figure className="d-none  d-md-inline-block">
                  <img src={signup} className="img-fluid" alt="signup" />
                </figure>
                <NavLink to="/Login" className=" ms-md-4 text-dark  t-300 ">
                  I'm already registered
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
