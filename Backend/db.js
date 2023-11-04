const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
    process.env.MONGO_URL,{
        dbName: process.env.MONGO_DB_NAME,
    }
).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("Not Connected to database", err.message);
});