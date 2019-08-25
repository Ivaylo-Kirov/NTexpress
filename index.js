
const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('hi');
});

app.post('/', (req, res) => {
    res.send('got a POST request');
});

app.listen(port, () => console.log('running on port ' + port));
