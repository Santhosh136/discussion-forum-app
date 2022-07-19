require("dotenv").config();

// import modules
const path = require("path");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const connectDB = require("./config/db");
const forumRoutes = require("./routes/forum");
const commentRoutes = require("./routes/comment");
const authRoutes = require("./routes/auth");
const passport = require("passport");
const User = require("./models/user");

// initialize constants
const PORT = process.env.PORT;

// initialize express app
const app = express();

// initialize middlewares
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));
app.use(express.json({ extended: false }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1000 * 60 * 60 * 24
    }
}));
app.use(passport.initialize());
app.use(passport.session());

// connecting MongoDB atlas
connectDB();

// setting up local strategy 
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//     console.log(req.session);
//     console.log(req.user);
//     next(); 
// })



// use routes
app.use("/api/forums", forumRoutes);
app.use("/api/forums/:id/comments", commentRoutes);
app.use("/api/auth", authRoutes);

// start and listen express web server
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));