const sqlite=require("sqlite")
const sqlite3=require("sqlite3")
const express=require("express")
const route=express.Router()
const jwt=require("jsonwebtoken")

require("dotenv").config()

route.post("/",async(req,res)=>{
 try{
 
    
    const db=await sqlite.open({filename:"database.json",driver:sqlite3.Database})
    const data=await (await db).get("select * from user where email=?",req.body.email)
    
    
    if(!data){
        res.status(404).json("user doesn't exist!")
    }
    else{
    const token=await jwt.sign({email:req.body.email},process.env.key,{expiresIn:"1h"})

    data.password===req.body.password?res.json({token:token,id:data.id}):res.status(400).json("user Unauthenticated")
      }
    }
    catch(error){
        res.status(400).json(error)
     
    }
})






module.exports=route