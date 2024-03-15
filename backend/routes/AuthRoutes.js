const express = require('express');
const { register, login, logout } = require('../controllers/AuthController');

const router = express.Router();

// Register a new user
router.all('/signup', register);

// Login a user
router.all('/login', login);

// Logout a user
router.all('/logout', logout);

module.exports = router;