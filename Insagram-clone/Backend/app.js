const con = require("./connection.js");
const expr = require("express");
const path = require("path")
const bcrypt = require("bcrypt")
const port = process.env.PORT || 9002;
const app = expr();

app.use(expr.urlencoded({ extended: false }));
app.post("/SignUp",async (req,res)=>{
    try{
     const {email,mobile,UserName,password} = req.body
     const ancrypt = await bcrypt.hash(password,4) 
     await con.query("INSERT INTO SignUp(Number_Email,FullName,UserName,Password) VALUES(?,?,?,?)",[email,mobile,UserName,ancrypt])
     res.redirect("/Instagram")
    }catch(error){
      console.log(error);
      res.statusCode(500).send("error accourd at SignUp")
    }
})

app.post("/Login",async(req,res)=>{
    try{
     const {email,password} = req.body;
     const ancrypt = await bcrypt.hash(password,4) 
     await con.query("INSERT INTO Login(UserName_NUMBER_Email,Password) VALUES(?,?)",[email,ancrypt])
     res.redirect("/Instagram")
    }catch(error){
        console.log(error);
        res.statusCode(500).send("Error in Login")
    }
})

app.get("/Login",(req,res)=>res.sendFile(path.join(__dirname,"../FrontEnd/LOGIN/Login.html")))
app.get("/SignUp",(req,res)=>res.sendFile(path.join(__dirname,"../FrontEnd/SIGNUP/SignUp.html")))
app.get("/Instagram",(req,res)=>res.sendFile(path.join(__dirname,"../FrontEnd/INSTA-PAGE/Index.html")))
app.listen(port,()=>console.log("working"))
