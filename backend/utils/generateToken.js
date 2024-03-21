const jwt = require('jsonwebtoken');

const generateTokenandSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 1000,
        httpOnly: true, // prevents cookie from being accessed by client side script
        sameSite: "strict", // cookie will only be sent in a first-party context
        secure: process.env.NODE_ENV === 'production' // cookie will only be sent in a HTTPS connection
    }) 
}

module.exports = generateTokenandSetCookie;