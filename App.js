const express= require("express")
const mongoose= require ("mongoose")
const cors= require("cors")

const app=express()
app.use(cors())

app.post("/",(req,res)=>{
    res.send("Hello")
}
)

app.post("/contact",
    (req,res)=>{
        res.send("Welcome to my contact page")
    }
)

app.listen(8080,()=>{
    console.log("server started")
} 
)