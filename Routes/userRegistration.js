const sqlite=require("sqlite")
const sqlite3=require("sqlite3")
const express=require("express")
const route=express.Router()

route.post("/",async(req,res)=>{
    const db=await sqlite.open({filename:"database.json",driver:sqlite3.Database})
    const data=await (await db).get("select * from user where email=?",req.body.email)
    if(data){
        res.status(302).json("User exists")
    }
    else{
        await db.run("Insert into user (email,password) values (?,?)",req.body.email,req.body.password)

        res.json("user registered Successfully!")
    }
})

module.exports=route