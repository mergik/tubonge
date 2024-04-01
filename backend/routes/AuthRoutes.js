const express = require("express");
const { register, login, logout } = require("../controllers/AuthController");

const router = express.Router();

// Register a new user
router.post("/signup", register);

// Login a user
router.post("/login", login);

// Logout a user
router.post("/logout", logout);

module.exports = router;
