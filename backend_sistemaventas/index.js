const express = require("express")
const cors = require("cors")
const {connection} = require("./database/config")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send({message:"welcome to mi API"})
})

connection.connect((err)=>{
    if(err) throw err
    console.log("Conectado a mi DB");
})

app.listen(process.env.PORT,(err)=>{
    if(err) throw err
    console.log("Escuchando en el puerto: "+process.env.PORT);
})