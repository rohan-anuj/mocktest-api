const sqlite=require("sqlite")
const sqlite3=require("sqlite3")
const express=require("express")
const route=express.Router()



route.delete("/",async(req,res)=>{
    const db=await sqlite.open({filename:"database.json",driver:sqlite3.Database})
    const data=await (await db).get("select * from user where email=?",req.body.email)
    console.log(req.body)
    console.log(data)
    if(data){
        const deleted=await (await db).run("delete from user where email=?",req.body.email)
        if(deleted){
            res.status(201).json(`${req.body.email} successfully deleted`)
        }
    }
    else{
        res.status(400).json("The request was forbidden")
    }

})

module.exports=route