const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    // console.log(token);
    // console.log(process.env.SECRETKEY);

    
    const verifyToken = jwt.verify(token, process.env.SECRETKEY);
    console.log(verifyToken);
    // { _id: '62bec27e4ec54cb9861c4973', iat: 1656671654 }

    // we get full user data in database in rootUser
      const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    console.log(rootUser)


    if (!rootUser) {
      throw new Error("User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.UserId = rootUser._id;
 
      
    // it is used pull the process to exctute futher after execution of middleware
    next();
  } catch (e) {
    res.status(401).send("unauthorized token provided");
    console.log(e);
  }
};

module.exports = authenticate;
