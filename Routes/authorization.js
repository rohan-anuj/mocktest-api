const jwt=require("jsonwebtoken")
require("dotenv").config()


module.exports=async function  auth(req,res,next){
    const verified=await jwt.verify(req.body.token,process.env.key)
    console.log(req.body.token)

    if(verified){
        next()
        console.log(verified.email)

    }
    else{
        res.status(400).json("Kindly check your token")
    }

}