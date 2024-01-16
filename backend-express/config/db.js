const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB database connected: ${(await conn).connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;