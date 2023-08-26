const express = require("express")
const bcrypt = require("bcrypt")
const connection = require("../Connection/Connection")
const app = express.Router()
const path = require("path")

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Components/html/Login.html"));
  });
  
  app.post("/", async (req, res) => {
    try {
      const {Email, Password} = req.body;
      const encryptPass = await bcrypt.hash(Password, 4);
      const querys =
        "INSERT INTO Login(Email,Password) VALUES (?,?)";
      await connection.query(querys, [Email,encryptPass]);
      res.redirect("/Sub");
    } catch (error) {
      console.log(error);
      res.statusCode(500).send("error founded in Post");
    }
  });
  
  

module.exports = app