
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    min: 3,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  date:{
    type:Date,
    default:Date.now
  },
  messages: [
    {
      name: {
        type: String,
        required: true,
        min: 3,
      },
      email: {
        type: String,
        required: true,
        unique:true,
        min: 3,
      },
      phone: {
        type: Number,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//TODO: Hashing Password & cPassword

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.cpassword = await bcrypt.hash(this.cpassword, 10);
  }
  next();
});

//TODO: Generating AuthToken
userSchema.methods.generateAuthToken = async function () {
  try {
    // ! jwt.sign method is used to generate the token
    const token = await jwt.sign({ _id: this._id }, process.env.SECRETKEY);
    // ! this.tokens.concat method is used to add the token to logined user data
    this.tokens = this.tokens.concat({ token: token });
    // ! this.save() is used to save data.
    await this.save();
    // ! this will return the token
    return token;
  } catch (error) {
    // ? if token is not generated we gwt error by this cacth block
    console.log(error);
  }
};



//TODO: Storing the User msg
userSchema.methods.addMessage = async function (name,email,phone,message) {
     try {
           this.messages=this.messages.concat({name:name,email:email,phone:phone,message:message});
           await this.save();
           return this.messages;

     } catch (e) {
      console.log(e);
     }
 
}



//TODO: Created the collection named User
const User = mongoose.model("user", userSchema);

module.exports = User;