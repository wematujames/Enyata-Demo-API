const morgan = require("morgan");
const config = require("config");
const errorHander = require("./middleware/errorHandler");
const connectDB = require("./config/connectDB").connect;

// Init app 
const express = require("express");
const app = express();
connectDB() // test conn to database

// Middleware
// Express to use accept json
app.use(express.json()); 
// Enable form data collection
app.use(express.urlencoded({ extended: false })); 
// Request logger 
app.use(morgan("dev"));

// Routes
app.use("/api/v1/incidents", require("./routes/incidents"));
app.use("/", (req, res) => res.sendFile(__dirname + "/index.html"));

// Set up custom errorhandler
app.use(errorHander); 

//Start app
app.listen(
    config.get("server.port"),
    console.log(
        `Server running in ${process.env.NODE_ENV} on port ${config.get("server.port")}`
    )
);