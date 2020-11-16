const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const states = [
    {id: 1, lagos: "Ikeja"},
    {id: 2, anambra: "Awka"},
    {id: 3, delta: "Asaba"}
];


app.get('/states', (req, res) => {
    res.send(states);
});

app.post('/states', (req, res) => {
    const state = {
        id: states.length + 1,
        bauchi: req.body.bauchi
    };
    states.push(state);
    res.send(state);
});

app.put('/states/:id', (req, res) => {
    const state = states.find(c => c.id === parseInt(req.params.id));
    if(!state) return res.status(404).send("request not found");

    state.lagos = req.body.lagos;
    res.send(state);
});

app.delete('/states/:id', (req, res) => {
    const state = states.find(c => c.id === parseInt(req.params.id));
    if(!state) return res.status(404).send("request not found");

    const index = states.indexOf(state);
    states.splice(index, 1);

    res.send(state);
});

module.exports = app;