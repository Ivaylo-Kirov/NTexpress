
const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/todo/:id', (req, res) => {
    /* 
    Route path: /todo/:id
    Request URL: http://localhost:5001/todo/3
    req.params: { "id": "3" } 
    */
    res.send(req.params["id"]);
});

app.post('/', (req, res) => {
    res.send('got a POST request');
});

app.listen(port, () => console.log('running on port ' + port));
