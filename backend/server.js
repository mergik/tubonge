//import express
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./DB/connectDB');
//import dotenv
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

// listen to port 5000
app.listen(PORT, () => {
    connectDB()
    console.log(`Server Running on port ${PORT}`)
});