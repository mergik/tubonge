const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        // check if token exists
        if (!token) {
            return res.status(401).json({ error: "Unauthorized!" });
        }
        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // check if token is valid
        if(!decoded) {
            return res.status(401).json({ error: "Unauthorized!" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user) {
            return res.status(404).json({ error: "User not found!" });
        }

        req.user = user;

        next();
        
    } catch (error) {
        console.error("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = protectRoute;