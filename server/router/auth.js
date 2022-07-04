const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");
const { ConnectionStates } = require("mongoose");

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

router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
      return res.send("fill out fully");
    }

    const checkUserExist = await User.findOne({ email: email });

    if (checkUserExist) {
      return res.status(422).json({ error: "email already exist" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "password not macthing" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      console.log(user);

      //! middleWare pre("save",callback)
      const saveuser = await user.save();
      res.status(201).json({ messgage: "user registed successfully" });

      if (saveuser) {
        res.json(user);
      } else {
        res.json("user regisation error");
      }
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    // ? console.log(email);

    if (!email || !password) {
      return res.status(400).json({ error: "plzz fill data" });
    }

    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin.email);

    if (userLogin) {
      const passwordMacth = await bcrypt.compare(password, userLogin.password);
      // console.log(passwordMacth);

      const token = await userLogin.generateAuthToken();
      // console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (userLogin.email === email && passwordMacth) {
        return res.json({ message: "login sucessfull" });
      } else {
        return res.status(400).json({ error: "invalid login" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

// creating about Page
router.get("/about", authenticate, (req, res) => {
  // console.log(req.rootUser);
  res.send(req.rootUser);
});

// creating about Page
router.get("/study", authenticate, (req, res) => {
  res.send(req.rootUser);      
});



router.get("/getContactData", authenticate, (req, res) => {
  res.send(req.rootUser);      
});

router.post("/contact", authenticate, async(req, res) => {
           try {

               const {name,email,phone,message}=req.body;

               if(!name || !email || !phone || !message){
                          console.log("error in contact form");
                          return res.json({error: "fill the contact form"})
                          }

               const userContact=await User.findOne({_id:req.UserId});
            
               if(userContact){
                         
                  const userMessage= await userContact.addMessage(name,email,phone,message);

                  await userContact.save();
                  
                   res.status(201).json({message:"contact add successfull"});

               }

           } catch (e) {
            console.log(e);
            res.json({error:"message not sent"})
           }           

});

module.exports = router;
