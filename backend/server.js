//import express
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./DB/connectDB');
const AuthRoutes = require('./routes/AuthRoutes');

//import dotenv
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

// middleware
app.use(express.json()); // for parsing application/json (from req.body)
app.use("/api/auth", AuthRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to TubongeChat");
});

// listen to port 5000
app.listen(PORT, () => {
    connectDB()
    console.log(`Server Running on port ${PORT}`)
});