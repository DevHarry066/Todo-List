const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors');

//Load env variables
dotenv.config({ path: './.env' });

app.use(express.json());


PORT = process.env.PORT || 3000;

const server = app.listen(PORT, console.log(`App Running on ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold));


