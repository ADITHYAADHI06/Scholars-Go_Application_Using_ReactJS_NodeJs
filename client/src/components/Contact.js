import React,{useState,useEffect} from "react";
import "../App.css";
import Contactitem from "./Contactitem";

const Contact = () => {




  const [userData, setUserData] = useState({});

  const contactData = async () => {
    try {
      const res = await fetch("/getContactData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      
      });
      //  we get the responese as res

      const data = await res.json();
            // console.log(res);
      setUserData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    contactData();
  }, []);

  return (
    <div className="Contact">
      <div className="container-fluid ">
        {/* 1st Row start */}
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-10  ">
            <div className="row d-flex justify-content-center align-items-center">
              {/* 1st Item start */}
              <Contactitem
                title="Phone"
                text="+91 8496952366"
                img="https://img.icons8.com/cute-clipart/64/000000/iphone-x.png"
              />
              {/* 2st item start */}
              <Contactitem
                title="Email"
                text="adishetty102@gmail.com"
                img="https://img.icons8.com/fluency/48/000000/mail.png"
              />

              {/* 3st item start */}
              <Contactitem
                title="Address"
                text="Udupi ,India"
                img="https://img.icons8.com/external-bluetone-bomsymbols-/91/000000/external-address-logistics-bluetone-bomsymbols-.png"
              />
            </div>
          </div>
        </div>
        {/* 1st Row end */}

        {/* 2st Row Start */}

        <div className="row my-5 d-flex justify-content-center">
          <div className="col-7 pt-4 pb-4 px-5 rounded  contact-info-form">
            <h2>Get In Touch</h2>

            <form>
              <div className="d-flex mt-4  justify-content-between">
                <input
                  type="text"
                  className="form-control me-2"
                  id="exampleInputName"
                  aria-describedby="NameHelp"
                  value={userData.name}
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="form-control me-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={userData.email}
                  placeholder="Your Email"
                />
                <input
                  type="number"
                  className="form-control"
                  value={userData.phone}
                  id="exampleInputPhonenumber1"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="textarea mt-4">
                <textarea
                  className="form-control"
                  placeholder="Masseage"
                  id="floatingTextarea2"
                  cols={5}
                  rows={6}
                />
              </div>

              <button type="submit" className="btn btn-primary mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
