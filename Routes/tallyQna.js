const sqlite=require("sqlite")
const sqlite3=require("sqlite3")
const express=require("express")
const route=express.Router()


route.post("/",async(req,res)=>{
    console.log(req.body)
    const db=await sqlite.open({filename:"./database.json",driver:sqlite3.Database})
    // const result =await (await db).run(`delete from excelqna where rightans="${req.body.rightans}"`)

 const result =await (await db).run(`insert into excelqna (Question,rightans,wrongans1,wrongans2,wrongans3) values ("${req.body.Question}","${req.body.rightans}","${req.body.wrongans1}","${req.body.wrongans2}","${req.body.wrongans3}")`)

result?res.status(201).json("Successfully created"):res.status(400).json("Error")
})


module.exports=route