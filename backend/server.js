require("dotenv").config();

// import modules
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const forumRoutes = require("./routes/forum");
const commentRoutes = require("./routes/comment");

// initialize constants
const PORT = process.env.PORT;

// initialize express app
const app = express();

// initialize middlewares
app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

// connecting MongoDB atlas
connectDB();

// test get route
app.get('/', (req, res) => res.send("Hello World"));

// use forum routes
app.use("/api/forums", forumRoutes);
app.use("/api/forums/:id/comments", commentRoutes);

// start and listen express web server
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));