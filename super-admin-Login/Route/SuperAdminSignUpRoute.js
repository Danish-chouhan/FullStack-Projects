const express = require("express");
const bcrypt = require("bcrypt");
const con = require("../Connection/Connection");
const path = require("path");
const app = express.Router();

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../Components/html/SuperAdminSignUp.html")
  );
});

app.post("/", async (req, res) => {
  try {
    const { FullName, Email, Password, Number } = req.body;
    const encryptPass = await bcrypt.hash(Password, 5);
    const querys =
      "insert into SuperAdminSignUp(FullName,Email,Number,Password) values(?,?,?,?)";
    await con.query(querys, [FullName, Email, Number, encryptPass]);
    res.redirect("/SuperAdminSignUpData");
  } catch (error) {
    console.log(error);
    res.statusCode(500).send("Error in Post");
  }
});

app.get("/SuperAdminSignUpData", async (req, res) => {
  try {
    const query = "select * from SuperAdminSignUp";
    const [Raws] = await con.execute(query);
    res.json(Raws);
  } catch (error) {
    console.log(error);
    res.statusCode(500).send("error while fatching");
  }
});

module.exports = app;
