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
    console.log("SEARCHING WITH ID:", req.params.id);
    knex('user_account')
        .select('*')
        .where('id')
        .then(data => res.status(200).json(data))
})


api.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));