//import express
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./DB/connectDB')
dotenv.config()
const app = express()

app.listen(5000, () => {
    connectDB()
    console.log(`listening to port 5000`)
})