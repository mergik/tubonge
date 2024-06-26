const path = require("path");
const express = require("express"); //import express
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const connectDB = require("./DB/connectDB");
const AuthRoutes = require("./routes/AuthRoutes");
const messageRoute = require("./routes/messageRoutes");
const userRoutes = require("./routes/userRoutes");
const { app, server } = require("./socket/socket");

dotenv.config(); //import dotenv
const PORT = process.env.PORT || 5000;

// const __dirname = path.resolve();

// middleware
app.use(express.json()); // for parsing application/json (from req.body)
app.use(cookieParser());

app.use("/api/auth", AuthRoutes);
app.use("/api/message", messageRoute);
app.use("/api/users", userRoutes);

// serve static files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// app.get("/", (req, res) => {
//   res.send("Welcome to TubongeChat");
// });

// listen to port 5000
server.listen(PORT, () => {
  connectDB();
  console.log(`Server Running on port ${PORT} http://localhost:${PORT}`);
});
