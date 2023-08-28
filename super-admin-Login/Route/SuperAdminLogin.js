const express = require("express")
const app = express.Router()
const path = require("path")

app.get("/",(req,res)=>{
   res.sendFile(path.join(__dirname,"../Components/SuperAdminLogins/LoginSuperAdmin.html"))
})

module.exports = app