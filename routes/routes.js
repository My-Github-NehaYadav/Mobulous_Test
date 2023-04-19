const express = require("express");
const app = express();

const Signup = require("../controllers/signup.user");
const Login = require("../controllers/login.user");
// const GetUsers = require("../controllers/get.users");

// Signup a new user
app.post("/signup/user", Signup.signupUser);

// Login User
app.post("/login/user", Login.loginUser);

// app.get("/getusers", GetUsers.getUsers);

module.exports = app;