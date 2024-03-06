require("dotenv").config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/me",(req,res)=>{
    res.send("<h1>Anurag Vashisht</h1>")
})
app.get("/mail",(req,res)=>{
    res.send("vashishtanurag4@gmail.com")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})