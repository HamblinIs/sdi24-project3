import express from 'express';
const app =  express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/launches', (req, res) => res.send('All the launches'));

app.post('/launches', (req, res) => res.send('Create a new launch'));

app.get('/launches/:id', (req, res) => res.send('Specific Launch'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));