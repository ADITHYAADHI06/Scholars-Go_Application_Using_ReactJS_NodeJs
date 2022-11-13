const dotenv = require("dotenv");
const { json } = require("express");
const { default: mongoose } = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
require("./db/conn");
dotenv.config({ path: "./config.env" });


const PORT = process.env.PORT;

// const User = require("./model/userSchema ");

// ! this middleware is get the Data from user. it convert data to json data
app.use(express.json());

app.use(require("./router/auth"));
// ! this is routing

// app.get("/", (req, res) => {
//   res.send("hi home page");
// });

// app.get("/about", (req, res) => {
//   res.send("hi about page");
// });
// app.get("/contact", (req, res) => {
//   res.send("hi conact page");
// });

app.get("/signin", (req, res) => {
  res.send("hi singin page");
});

app.get("/logout", (req, res) => {
  res.send("hi logout page");
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

// ! create the server
app.listen(PORT, () => {
  console.log(`${PORT} server connected `);
});
