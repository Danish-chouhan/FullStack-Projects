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
      res.redirect("/LoginData");
    } catch (error) {
      console.log(error);
      res.statusCode(500).send("error founded in Post");
    }
  });
  
  app.get("/LoginData", async (req, res) => {
    try {
      const query = "SELECT id, Email, Password FROM Login";
      const [rows] = await connection.execute(query); // Using execute for better results
      
  
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error occurred while fetching data");
    }
  });
  

module.exports = app