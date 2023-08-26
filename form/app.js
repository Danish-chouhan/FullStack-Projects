const express= require("express")
const con = require('./Connection/connection')
const Data = require("./Router/Data")
const SuccessPage = require("./Router/SuccesPage")
const indexFile = require("./Router/index")
const bcrypt= require("bcrypt")
const path= require("path")
const app = express()
const port = 11000
const data = require("./Router/Data")

app.use(express.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,"Components")))
app.use("/SuccesFullPage",SuccessPage)
app.use("/",indexFile)
app.use("/Submited",Data)

app.post("/",async (req,res)=>{
    try{
    const {FullName,Email,Password} = req.body;
    const encryptPass = await bcrypt.hash(Password,5)
    const querys = "INSERT INTO Data(FullName,email,password) VALUES(?,?,?)"
    await con.query(querys,[FullName,Email,encryptPass])
    }catch(error){
        console.log(error);
        res.statusCode(500).send("error is getting while using post")
    }
    res.redirect("/SuccesFullPage")
})

app.use("/Data",data)
app.get("/:id",(req,res)=>{
    const dataFile = req.params.id
    res.sendFile(path.join(__dirname,`./Components/html/${dataFile}`))  
})


app.listen(port,()=>{
    console.log(`server is working on ${port}`);
})