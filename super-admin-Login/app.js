const express = require("express");
const Login = require("./Route/LoginRoute")
const SignUp = require("./Route/SignUpRoute")
const SuperAdminSignUp = require("./Route/SuperAdminSignUpRoute")
const SuperAdminLogins = require("./Route/SuperAdminLogin")
const port = 5000;
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "./Components")));
app.use(express.urlencoded({ extended: false }));
app.use("/Login",Login)
app.use("/SignUp",SignUp)
app.use("/SuperAdminSignUp",SuperAdminSignUp)
app.use("/SuccesFullSubmited/LoginSuperAdmin",SuperAdminLogins)


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Index.html"));
});
app.get("/SuccesFullSubmited/LoginData", (req, res) => {
  res.sendFile(path.join(__dirname,"./Components/DataTables/DataCheakerLogin.html"))
});
app.get("/SuccesFullSubmited/SignUpData",(req,res)=>{
  res.sendFile(path.join(__dirname,"./Components/DataTables/DataCheakerSignUp.html"))
})
app.get("/SuccesFullSubmited/SuperAdminSignUpData",(req,res)=>{
    res.sendFile(path.join(__dirname,"./Components/DataTables/DataCheakerSuperAdmin.html"))
})
app.get("/SuccesFullSubmited",(req,res)=>{
    res.sendFile(path.join(__dirname,"./Components/SuccesFullSubmited/SuccesFullSubmited.html"))
})

app.listen(port, () => {
  console.log(`port is working on ${port}`);
});
