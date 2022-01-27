const express=require("express")
const app=express()
const sqlite=require("sqlite")
const sqlite3=require("sqlite3")
const cors=require("cors")

app.use(cors({
    origin:"*",
    methods:"GET,POST"
}))

 app.use(express.json())


 

app.post("/",async (req,res)=>{
    console.log(req.body)
    const db=await sqlite.open({filename:"database.json",driver:sqlite3.Database})
     const data=await (await db).run(`INSERT INTO user (email,password) VALUES (?,?)`,req.body.email,req.body.password)
     data?res.status(200).json({message:data}):res.status(400).json("There's something wrong!")
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


const PORT=3000 || process.env.PORT

app.listen(PORT,()=>console.log("db connected"))