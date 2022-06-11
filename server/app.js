const dotenv = require("dotenv");
const { json } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
require("./db/conn");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

// const User = require("./model/userSchema ");

// ! this middleware is get the Data from user. it ocnver json data
app.use(express.json());

app.use(require("./router/auth"));
// ! this is routing
app.get("/", (req, res) => {
  res.send("hi home page");
});

app.get("/about", (req, res) => {
  res.send("hi about page");
});
app.get("/contact", (req, res) => {
  res.send("hi conact page");
});

app.get("/signin", (req, res) => {
  res.send("hi singin page");
});

app.get("/logout", (req, res) => {
  res.send("hi logout page");
});

// ! create the server
app.listen(PORT, () => {
  console.log("server connected");
});
