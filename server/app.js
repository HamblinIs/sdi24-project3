const express = require('express');
const cookieSession = require('cookie-session'); 
var cookieParser = require('cookie-parser')
const app = express();
const port = 8080;



app.use(cookieSession({
    name: 'user_session',
    keys: ['key1', 'key2'],
    httpOnly: true,
    sameSite: 'strict',
}));

app.get('/login', function (req, res) {
    if (loginSuccess(req.body.username)) {
        req.session.username = req.body.username;
    }else {
        // forbidden
        req.status(403).send();
      }
}); 

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/launches', (req, res) => res.send('All the launches'));

app.post('/launches', (req, res) => res.status(201).send('Create a new launch'));

app.get('/launches/:id', (req, res) => res.send('Specific Launch'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
