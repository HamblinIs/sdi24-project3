const express =  require('express');
const cors = require("cors");

const app =  express();
const port = 8080;

app.use(express.json());
app.use(cors());

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
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));