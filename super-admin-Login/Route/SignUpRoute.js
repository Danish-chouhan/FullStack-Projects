const express = require("express")
const bcrypt = require("bcrypt")
const connection = require("../Connection/Connection")
const app = express.Router()
const path = require("path")

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
      res.redirect("/Sub");
    } catch (error) {
      console.log(error);
      res.statusCode(500).send("error founded in Post");
    }
  });
  
  

module.exports = app