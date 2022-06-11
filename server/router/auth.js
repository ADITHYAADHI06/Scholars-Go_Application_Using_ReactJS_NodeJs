const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");



router.get("/", (req, res) => {});


// ! promise
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.send("fill out fully");
//   }

//   User.findOne({ email: email })
//     .then((userExsit) => {
//       if (userExsit) {
//         return res.json("email already exist");
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.json("registed");
//         })
//         .catch((e) => {
//           res.json(e);
//         });
//     })
//     .catch((e) => {
//       console.log(e);
//     })
   
// });

//! async-await method

router.post("/register", async(req, res) => {
  try {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
      return res.send("fill out fully");
    }
  
    const checkUserExist= await User.findOne({ email: email });
       
    if (checkUserExist) {
          return res.json("email already exist");
         }
  
    const user = new User({ name, email, phone, work, password, cpassword });
  
       const saveuser= await user.save();
       if(saveuser){
            res.json(user);
       }else{
            res.json("user regisation error");
          } 

  } catch (error) {
    console.log(error);
  }
   
});



module.exports = router;
