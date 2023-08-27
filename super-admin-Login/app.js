const express = require("express");
const Login = require("./Route/LoginRoute")
const SignUp = require("./Route/SignUpRoute")

const port = 4000;
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "./Components")));
app.use(express.urlencoded({ extended: false }));
app.use("/Login",Login)
app.use("/SignUp",SignUp)



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Index.html"));
});

app.get("/LoginData", (req, res) => {
  res.sendFile(path.join(__dirname,"./Components/DataTables/DataCheakerLogin.html"));
});
app.get("/SignUpData",(req,res)=>{
  res.sendFile(path.join(__dirname,"./Components/DataTables/DataCheakerSignUp.html"))
})

app.listen(port, () => {
  console.log(`port is workingwertyu on ${port}`);
});
