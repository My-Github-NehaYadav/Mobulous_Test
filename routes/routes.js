const express = require("express");
const app = express();

const Signup = require("../controllers/signup.user");
const Login = require("../controllers/login.user");
const AddProduct = require("../controllers/add.product");
const GetDetail = require("../controllers/get.products");
const SendNotification = require("../controllers/sendNotification")

// *******************Signup a new user **************
app.post("/signup/user", Signup.signupUser);

// *******************Login User**********************
app.post("/login/user", Login.loginUser);

//******************Add product*********************** 
app.post("/product", AddProduct.addProduct);

// ******************Get Deatils***********************
app.get("/getproducts", GetDetail.getProducts);

//*******************Send Notification*****************
app.post("/fcm", SendNotification.fcm);

module.exports = app;