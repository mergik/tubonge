const express = require("express");

const sendMessage = require("../controllers/messageController");
const getMessages = require("../controllers/messageController");
const protectRoute = require("../middleware/protectRoute");

const router = express.Router();

// Create a new message
router.post("/send/:id", protectRoute, sendMessage);
// Get messages
router.get("/:id", protectRoute, getMessages);

module.exports = router;
