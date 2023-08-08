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
     res.redirect("/Login")
    }catch(error){
      console.log(error);
      res.statusCode(500).send("error accourd at SignUp")
    }
})

app.post("/Login",async(req,res)=>{
    try{
     const {email,password} = req.body;
     await con.query("INSERT INTO Login(SrNO,UserName_NUMBER_Email,Password) VALUES(?,?,?)",[1,email,password])
     res.redirect("/SignUp")
    }catch(error){
        console.log(error);
        res.statusCode(500).send("Error in Login")
    }
})

app.get("/Login",(req,res)=>res.sendFile(path.join(__dirname,"./Login.html")))
app.get("/SignUp",(req,res)=>res.sendFile(path.join(__dirname,"./SignUp.html")))
app.listen(port,()=>console.log("working"))
