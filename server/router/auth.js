const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');


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
         }else if(password!==cpassword){
              console.log("password not macthing");
         }else{
          const user = new User({ name, email, phone, work, password, cpassword });

         //! middleWare pre("save",callback) 

        const saveuser= await user.save();
         if(saveuser){
           res.json(user);
         }else{
           res.json("user regisation error");
         } 
       }
  
    

  } catch (error) {
    console.log(error);
  }
   
});


router.post("/signin", async(req, res) => {
try {
    
  const {email, password}=req.body;
  // ? console.log(email);

  if(!email || !password)
{
  console.log(" login Error ");
}
     
    const userLogin = await User.findOne({email:email});
    console.log(userLogin.email);

const passwordMacth= await bcrypt.compare(password,userLogin.password)
console.log(passwordMacth);


    if(userLogin.email===email && passwordMacth ) 
{
  console.log("login sucessfull");

}else
{
  console.log("invalid login");
}
} catch (error) {
  console.log(error);
}

});

module.exports = router;
