const sqlite=require("sqlite")
const sqlite3=require("sqlite3")
const express=require("express")
const route=express.Router()
const jwt=require("jsonwebtoken")
require("dotenv").config()


route.put("/",async(req,res)=>{
    const db=await sqlite.open({filename:"database.json",driver:sqlite3.Database})
    const success=  await (await db).run(`update user set "${req.body.topic}"="${req.body.score}" where email="${req.body.email}"`)
    const token=await jwt.sign({email:req.body.email},process.env.key,{expiresIn:"1h"})
    success?res.json(token):res.status(400).json("something went wrong!")

})


module.exports=route