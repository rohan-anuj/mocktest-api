const express=require("express")
const app=express()
const sqlite=require("sqlite")
const sqlite3=require("sqlite3")
const cors=require("cors")
const User=require("./Routes/userRegistration")
const userlogged=require("./Routes/userLoged")
const userdelete=require("./Routes/userDelete")
const userSign=require("./Routes/userSigned")

const tally=require("./Routes/tallyQna")

app.use(cors({
    origin:"*",
    methods:"GET,POST"
}))

 app.use(express.json())

 app.use("/user",User)
 app.use("/userlog",userlogged)
 app.use("/userdel",userdelete)
 app.use("/userSign",userSign)
 app.use("/excel",tally)
 app.get("/tallyqna",async(req,res)=>{
    const db=await sqlite.open({filename:"database.json",driver:sqlite3.Database})
    const result=await (await db).all("select * from tallyqna")
    result?res.json(result):res.status(400).json("No data collected !")

 })
 app.get("/cccqna",async(req,res)=>{
    const db=await sqlite.open({filename:"database.json",driver:sqlite3.Database})
    const result=await (await db).all("select * from cccqna")
    result?res.json(result):res.status(400).json("No data collected !")

 })
 app.get("/excelqna",async(req,res)=>{
    const db=await sqlite.open({filename:"database.json",driver:sqlite3.Database})
    const result=await (await db).all("select * from excelqna")
    result?res.json(result):res.status(400).json("No data collected !")

 })



app.get("/",async(req,res)=>{
    try{

    const db= await sqlite.open({filename:"database.json",driver:sqlite3.Database})
     const result=await (await db).all("select * from user")
     result?res.json(result):res.status(400).json("No data collected !")
    }
    catch(err){
        console.log(err)
    }
})


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(PORT))