const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/error');

const employee = require('./routes/employee');
const auth = require('./routes/authentication');
const user = require('./routes/user');

const baseUrl = "/api/v1";



const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(express.json());

app.use(`${baseUrl}/employee`, employee);
app.use(`${baseUrl}/auth`, auth);
app.use(`${baseUrl}/user`, user);

app.use(errorHandler);

app.listen(PORT, console.log(`Listening on Port ${PORT}`));