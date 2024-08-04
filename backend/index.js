const ConnectedClient = require("./db");
const express = require("express");
const cors = require("cors");
// const passport = require('passport');
// const session = require('express-session');

// require('./auth'); // Import Passport configuration
const app = express();

// app.use(session({ secret: 'your secret', resave: false, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use(cors());
app.use(express.json());

ConnectedClient.connectToDB().then(client => {

    // console.log('Client Details >>>> ', client)

    app.post('/login', function(req, res){
        let {username, password} = req.body;

        client.db('test').collection('users').findOne({username : username}).then(result => {
            if(!result){
                return res.status(401).json({
                    success: false,
                    message: "Invalid username or password"
                })
            }

            if(result.password === password){
                return res.status(200).json({
                    success: true,
                    message: "Login successful"
                })
            }
        }).catch(error => {
            return res.status(500).json({ message: "Error logging in", error });
        })
    })

    app.listen(5000, () => {
        console.log("Server started on port 5000");
    });
})



/*
app.use(cors());
ConnectedClient.connectToDB().then(client => {

    // app.get('/auth/google',
    //     passport.authenticate('google', { scope: ['profile', 'email'] })
    // );

    // app.get('/auth/google/callback',
    //     passport.authenticate('google', { failureRedirect: '/hello' }),
    //     (req, res) => {
    //         // Successful authentication, redirect home.
    //         res.redirect('/hello');
    //     }
    // );

    app.get('/hello', (req, res) => {
        res.send("Hello World");
    })

    app.post('/signup', async (req, res) => {
        const { username, email, password } = req.body;
        try {
            const existingUser = await client.db("test").collection("users").findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }

            // const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await client.db("test").collection("users").insertOne({ username, email, password });

            res.status(201).json({ message: "User created" });
        } catch (error) {
            res.status(500).json({ message: "Error creating user", error });
        }
    })

    app.post('/login', async (req, res) => {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide username and password"
            })
        }

        client.db("test").collection("users").findOne({ username }).then(result => {
            if (!result) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid username or password"
                })
            }
            return res.status(200).json({
                success: true,
                message: "Login successful"
            })
        }).catch(error => {
            res.status(500).json({ message: "Error logging in", error });
        })

    })

    app.listen(5000, () => {
        console.log("Server started on port 5000");
    })
});
*/