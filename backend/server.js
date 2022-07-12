// import modules
const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const forumRoutes = require("./routes/forum");

// initialize constants
const PORT = 3001;

// initialize express app
const app = express();

// initialize middlewares
app.use(express.json({ extended: false }));

// connecting MongoDB atlas
connectDB();

// set routes
app.get('/', (req, res) => res.send("Hello World"));

// use forum routes
app.use("/api/forums", forumRoutes);

// start and listen express web server
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));