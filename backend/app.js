
// app.js

const express = require('express');
const serverConfig = require('./config/server');
const connectToDb = require('./db/index');
const clientRouter = require('./routes/client');
const mongoose = require('mongoose');

const app = express();

//connect to db 
connectToDb();
// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes and other middleware...

app.use('/api/clients',clientRouter);


// Start the server
app.listen(serverConfig.port, () => {
    console.log(`Server is running on port ${serverConfig.port}`);
});