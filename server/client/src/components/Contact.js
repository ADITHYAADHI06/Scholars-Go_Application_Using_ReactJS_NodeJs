// import React, { useState, useEffect } from "react";
// import "../App.css";
// import Contactitem from "./Contactitem";
// import { useForm, ValidationError } from '@formspree/react';
// import ContactPage from "./Contact";

// const Contact = () => {

//   const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });

//   const getingContactData = async () => {
//     try {
//       const res = await fetch("/getData", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       //  we get the responese as res
//       const data = await res.json();


//       setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });
//       return data;
//     }
//     catch (e) {
//       console.log(e);
//     }
//   };
//   useEffect(() => {
//     getingContactData();
//     console.log(`conact fecthed data --------- `);
//   }, []);

//   const inputHandlers = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setUserData({ ...userData, [name]: value });
//   }

//   //  Sending the Data to backEnd
//   //  const SendMessage= async(e)=>{
//   //        const {  name,email,phone,message }=userData;
//   //                 e.preventDefault();

//   //          const res =await fetch("/contact",{
//   //                       method:"POST",
//   //                       headers:{
//   //                         "Content-Type":"application/json"
//   //                       },
//   //                       body: JSON.stringify({
//   //                             name,email,phone,message
//   //                       })
//   //               })

//   //         const data=await res.json();

//   //         if(!data){
//   //               console.log("Message not Send");
//   //         }else{
//   //               alert("message Sent");
//   //               setUserData({...userData, message:""});
//   //         }
//   //  }

//   const [state, handleSubmit] = useForm("xbjwvzkb");
//   if (state.succeeded) {
//     window.alert("Msg sent");
//     return (
//       <ContactPage />
//     );
//   }

//   return (
//     <div className="Contact">
//       <div className="container-fluid ">
//         {/* Dev-Contact-Row start */}

//         <div className="row mt-5 d-flex justify-content-center">
//           <div className="col-11 col-sm-10  ">
//             <div className="row d-flex justify-content-center align-items-center">
//               {/* Dev-Contact-Item-1 start */}
//               <Contactitem
//                 title="Phone"
//                 text="+91 8496952366"
//                 img="https://img.icons8.com/cute-clipart/64/000000/iphone-x.png" />
//               {/* Dev-Contact-Item-2 start */}
//               <Contactitem
//                 title="Email"
//                 text="adishetty102@gmail.com"
//                 img="https://img.icons8.com/fluency/48/000000/mail.png" />
//               {/* Dev-Contact-Item-2 start */}
//               <Contactitem
//                 title="Address"
//                 text="Udupi ,India"
//                 img="https://img.icons8.com/external-bluetone-bomsymbols-/91/000000/external-address-logistics-bluetone-bomsymbols-.png" />
//             </div>
//           </div>
//         </div>

//         {/* Dev-Contact-Row end */}

//         {/* User-Contact-Section Start */}

//         <div className="row my-5 d-flex justify-content-center">
//           <div className="col-10 col-md-7 px-4 py-3 pt-md-4 pb-md-4 px-md-5 rounded  contact-info-form">
//             <h2>Get In Touch</h2>

//             <form onSubmit={handleSubmit} >
//               <div className=" d-sm-flex mt-4 justify-content-between">
//                 <input
//                   type="text"
//                   className="form-control mb-3 mb-sm-0 me-sm-2"
//                   id="exampleInputName"
//                   aria-describedby="NameHelp"
//                   onChange={inputHandlers}
//                   name="name"
//                   value={userData.name}
//                   placeholder="Your Name" />
//                 <input
//                   type="email"
//                   className="form-control mb-3 mb-sm-0 me-sm-2"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   onChange={inputHandlers}
//                   name="email"
//                   value={userData.email}
//                   placeholder="Your Email" />
//                 <input
//                   type="number"
//                   className="form-control"
//                   onChange={inputHandlers}
//                   name="phone"
//                   value={userData.phone}
//                   id="exampleInputPhonenumber1"
//                   placeholder="Your Phone Number" />
//               </div>
//               <div className="textarea mt-4">
//                 <textarea
//                   className="form-control"
//                   placeholder="Masseage"
//                   id="floatingTextarea2"
//                   onChange={inputHandlers}
//                   name="message"
//                   value={userData.message}
//                   cols={5}
//                   rows={6} />
//               </div>

//               <button type="submit" disabled={state.submitting} className="btn btn-dark mt-4">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>




//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState, useEffect } from "react";
import "../App.css";
import Contactitem from "./Contactitem";

const Contact = () => {

  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });

  const contactData = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },

      });
      //  we get the responese as res

      const data = await res.json();
      console.log(data.name);
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    contactData();
  }, []);


  const inputHandlers = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  //  Sending the Data to backEnd 

  const SendMessage = async (e) => {
    const { name, email, phone, message } = userData;
    e.preventDefault();
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      })
    })
    const data = await res.json();
    if (!data) {
      console.log("Message not Send");
    } else {
      alert("message Sent");
      setUserData({ ...userData, message: "" });
    }

  }

  // console.log(userData);
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

            <form method="POST">
              <div className="d-flex mt-4  justify-content-between">
                <input
                  type="text"
                  className="form-control me-2"
                  id="exampleInputName"
                  aria-describedby="NameHelp"
                  onChange={inputHandlers}
                  name="name"
                  value={userData.name}
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="form-control me-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={inputHandlers}
                  name="email"
                  value={userData.email}
                  placeholder="Your Email"
                />
                <input
                  type="number"
                  className="form-control"
                  onChange={inputHandlers}
                  name="phone"
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
                  onChange={inputHandlers}
                  name="message"
                  value={userData.message}
                  cols={5}
                  rows={6}
                />
              </div>

              <button type="submit" onClick={SendMessage} className="btn btn-dark mt-4">
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


