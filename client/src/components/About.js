import React, { useEffect,useState } from "react";
import profile_pic from "./images/profile_pic.jpeg";
import Default_Userpic from "./images/Default_userPic.jpg";
import "../App.css"

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
      <div className="container-fluid About">
        <form method="GET">
          <div className="row d-flex justify-content-center ">

          <div className="col-10 col-md-7  user-profile margin p-0 p-md-5">
              <div className="row p-0 m-0">
                 <div className="col-12 col-md-5 text-center   ">
                   <img src= {userData.name==="ADITHYA SHETTY"? profile_pic:Default_Userpic} className="user_img " alt="" />
                 </div>

                 <div className="col-12 col-md-6">
                      <div >
                            <div className="ms-3 ms-sm-5 mt-2 mt-md-0 ms-md-0" >
                                 <h5>{userData.name}</h5>
                                 <h6>{userData.work}</h6>
                                 <p className="profile-rating mt-3 mb-3 mb-md-5">
                                    RANKINGS : <span>1/10</span>
                                 </p>
                            </div>
                    
                      <div>
                               <div className=" ms-3 ms-sm-5 ms-md-0 Data">
                                      <h5 className="about_heading">ABOUT</h5>   
                                    <div className="row">
                              <div className="col-12 col-md-12">
                               <p>Name :  {userData.name}</p>
                               <p>Email :  {userData.email}</p>
                               <p>Profession :  {userData.work}</p>
                               <p>Phone:   {userData.phone}</p>
                                      </div>  
                                   </div>
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




