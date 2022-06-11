const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

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
});

  
userSchema.pre("save", async function(next){
 
    if(this.isModified("password"))
{
  this.password=await bcrypt.hash(this.password, 10);
  this.cpassword=await bcrypt.hash(this.cpassword, 10);
}
next();

})


const User = mongoose.model("USER", userSchema);
module.exports = User;
