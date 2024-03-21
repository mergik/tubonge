//import express
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./DB/connectDB");
const AuthRoutes = require("./routes/AuthRoutes");
const messageRoute = require("./routes/messageRoutes");

//import dotenv
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

// middleware
app.use(express.json()); // for parsing application/json (from req.body)
app.use(cookieParser());

app.use("/api/auth", AuthRoutes);
app.use("/api/message", messageRoute);


app.get("/", (req, res) => {
  res.send("Welcome to TubongeChat");
});

// listen to port 5000
app.listen(PORT, () => {
  connectDB();
  console.log(`Server Running on port ${PORT} http://localhost:${PORT}`);
});
