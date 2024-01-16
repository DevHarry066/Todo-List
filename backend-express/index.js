const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');

//Load env variables
dotenv.config({ path: './.env' });

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.json(
        { id: 1, value: "Hello" }
    )
});

PORT = process.env.PORT || 3000;

const server = app.listen(PORT, console.log(`App Running on ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold));


