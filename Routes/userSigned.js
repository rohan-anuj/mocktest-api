const sqlite=require("sqlite")
const sqlite3=require("sqlite3")
const auth=require("../Routes/authorization")
const express=require("express")
const route=express.Router()
const jwt=require("jsonwebtoken")

route.post("/",auth,async(req,res)=>{
    const db=await sqlite.open({filename:"database.json",driver:sqlite3.Database})
    const data=await jwt.verify(req.body.token,process.env.key)


const datas=await (await db).get("select * from  user where email=?",data.email)

datas?res.json(datas):res.status(404).json("token invalid")




})

module.exports=route