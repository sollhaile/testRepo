const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

mongoose.connect('mongodb+srv://solomonh:sol123@cluster0.6oydp.mongodb.net/MyDb').then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("Error: " + err);
});

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ["Content-Type", "Authorization", "Cache-Control", "Expires", "Pragma"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});