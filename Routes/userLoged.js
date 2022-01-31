const sqlite=require("sqlite")
const sqlite3=require("sqlite3")
const express=require("express")
const route=express.Router()

route.post("/",async(req,res)=>{
    console.log(req.body)
    const db=await sqlite.open({filename:"database.json",driver:sqlite3.Database})
    const data=await (await db).get("select * from user where email=?",req.body.email)

    if(!data){
        res.status(404).json("user doesn't exist!")
    }
    else{
    data.password===req.body.password?res.json({id:data.id}):res.status(400).json("user Unauthenticated")
      }
})


module.exports=route