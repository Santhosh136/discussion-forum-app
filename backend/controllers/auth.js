const passport = require("passport");
const User = require("../models/user");

const isLoggedIn = (req, res) => {
    if(req.isAuthenticated())   return res.status(200).send('OK');       
    return res.status(401).send('Unauthorized');
}

const registerUser = (req, res) => {
    User.register({username: req.body.username},
        req.body.password,
        (err, user) => {
            if(err) return res.status(500).send({ error : err.message });
            else res.status(200).send('OK');
        });
}

const loginUser = (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    /**
     * router.post('/login', (req, res) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
            return res.status(500).send();
            }
            if (!user && info) {
            return res.status(422).send(info);
            }

            // do something here and send back a res.json()
        })(req, res);
        });
     */

        /**
         * , (err, user, info) => {
            if(err) console.log("local err ",err);
            if(!user) res.status(401).send("username or password is incorrect");
            res.status(200).send('OK');       
        }
         */

    req.login(user, (err) => {
        if(err) return res.status(500).send({ error : err.message });
        passport.authenticate("local")(req, res, (err)=> {
            if(err) console.log(err);
            res.status(200).send('OK');   
        });
    })
};

const logoutUser = (req, res) => {
    req.logout((err)=> {
        if(err) return res.status(500).send({ error : err.message });
        else return res.status(200).clearCookie('connect.sid', {path: '/'}).json({status: "Success"});
    });
}

module.exports = {
    isLoggedIn,
    registerUser,
    loginUser,
    logoutUser
} 