const express = require('express');
const cookieSession = require('cookie-session'); 
const app = express();
const port = 8080;
const cors = require("cors");
const knex = require('knex')( require('./knexfile')['development'])

app.use(express.json());
app.use(cors());


app.use(cookieSession({
    name: 'user_session',
    keys: ['key1', 'key2'],
    httpOnly: true,
    sameSite: 'strict',
}));

app.get('/data/launches_by_user_id', function (req, res) {
    // Retrieve username from session cookie
    const username = req.session.username;
    
    if (username) {
        // If username exists in session, proceed with fetching launches
        console.log("SEARCHING LAUNCHES WITH USERNAME: ", username);
        knex.select('id')
            .from('user_account')
            .where('username', username)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json({ error: err.message }));
    } else {
        // If username doesn't exist in session, return unauthorized
        res.status(401).send('Unauthorized');
    }
});
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/launches', async (req, res) => {
    const allLaunches = await knex('launch').select('*');


    res.status(200).json('All the launches')
});

app.post('/launches', (req, res) => res.status(201).send('Create a new launch'));

app.get('/launches/:id', (req, res) => res.send('Specific Launch'));

let testUserData = {
    name: "Astro Boy",
    address: "Nunya Way",
    email: "astro@example.com",
    username: "galaxy-traveler",
    password: "secret-pass"
}

app.post('/auth/signup', (req, res) => {
    let userData = req.body;
    knex("user-account").insert({name: userData.name, address: userData.address, email: userData.email, username: userData.username, password: userData.password});
    res.status(201).json({status: "Authenticated"});
})

app.post('/auth/signin', async (req, res) => {
    let userData = req.body;
    let dbData = {};
    knex("user-account").select('*').where({username: userData.username})
    .then(dbResp => {
        if (dbResp.password === userData.password) {
            res.status(201).json({status: "Authenticated"})
        }
    })
    .catch(err => res.status(500).send(err));
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
