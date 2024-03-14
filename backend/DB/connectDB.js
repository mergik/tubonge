const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDB`)
    }catch(error){
        console.error('MongoDB connection error:', error);
    }
}

module.exports = connectDB