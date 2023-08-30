const express = require("express");
const bcrypt = require("bcrypt");
const connection = require("../Connection/Connection");
const app = express.Router();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Components/html/SignUp.html"));
});

app.post("/", async (req, res) => {
  try {
    const { FullName, Email, Password, Number } = req.body;
    const encryptPass = await bcrypt.hash(Password, 4);
    const querys =
      "INSERT INTO SignUp(FullName,Email,Number,Password) VALUES (?,?,?,?)";
    await connection.query(querys, [FullName, Email, Number, encryptPass]);
    res.redirect("/SuccesFullSubmited");
  } catch (error) {
    console.log(error);
    res.statusCode(500).send("error founded in Post");
  }
});

app.get("/SignUpData",async (req,res)=>{
  try{
    const query = "select * from SignUp"
    const [Raws] = await connection.execute(query)
    res.json(Raws)
  }catch(error){
    console.log(error);
    res.statusCode(500).send("error Cougth while Fatching Data")
  }
})
module.exports = app;
