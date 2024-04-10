const express = require('express');
const api =  express();
const port = process.env.PORT || 8080;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const cors = require('cors');

api.use(express.json())
api.use(cors())


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



api.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));