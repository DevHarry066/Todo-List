const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const todos = require('./routes/todos');

//Load env variables
dotenv.config({ path: './.env' });

connectDB();

app.use(express.json());

//Set cookie
app.use(cookieParser());

app.use('/api/v1/todos', todos);

PORT = process.env.PORT || 3000;

const server = app.listen(PORT, console.log(`App Running on ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold));


