const express = require('express');
const api =  express();
const port = process.env.PORT || 8080;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const cors = require('cors');

api.use(express.json())
api.use(cors())

//make a joined get for launch with some ID and seats

//make a post for user accounts to create a new account

//make a joined get to display your flights


api.get('/', function(req, res) {
    res.send("DATABASE ONLINE");
})
api.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

api.get('/data/user_account', function(req, res) {
    knex('user_account')
        .select('*')
        .then(data => res.status(200).json(data))
})

api.get('/data/launch', function(req, res) {
    knex('launch')
        .select('*')
        .then(data => res.status(200).json(data))
})


api.get('/data/seats', function(req, res) {
    knex('seats')
        .select('*')
        .then(data => res.status(200).json(data))
})

api.get('/data/seat_type', function(req, res) {
    knex('seat_type')
        .select('*')
        .then(data => res.status(200).json(data))
})

api.get('/data/user_account_by_id/:id', function(req, res) {
    console.log("SEARCHING WITH ID: ", req.params.id);
    knex.select('*')
        .from('user_account')
        .where('id', req.params.id)
        .then(data => res.status(200).json(data))
})

api.post('/auth/signup', (req, res) => {
    let userData = req.body;
    console.log("USING DATA FOR: ", userData.name);
    const {name, address, email, username, password} = req.body;
    //knex('user_account').insert({name: userData.name, address: userData.address, email: userData.email, username: userData.username, password: userData.password});
    knex('user_account')
    .insert({name, address, email, username, password})
    // knex.insert([{ name: userData.name }, { address: userData.address }, { email: userData.email }, { username: userData.username }, { password: userData.password }], ['id'])
    // .into('user_account');
    .then(res.status(201).json({status: "Authenticated"}))
})

api.post('/auth/signin', async (req, res) => {
    let userData = req.body;
    let dbData = {};
    knex("user_account").select('*').where({username: userData.username})
    .then(dbResp => {
        if (dbResp.password === userData.password) {
            res.status(201).json({status: "Authenticated"})
        }
    })
    .catch(err => res.status(500).send(err));
})


