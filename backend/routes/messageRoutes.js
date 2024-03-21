const express = require('express');
//const { sendMessage } = require('../controllers/messageController');
//const { protectRoute } = require('../middleware/protectRoute');

const router = express.Router();

// Create a new message
router.post('/send/:id');

module.exports = router;