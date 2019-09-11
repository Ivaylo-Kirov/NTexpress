
const express = require('express');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysqlfirsttest', 'admin', 'Leafs2905.', {
    host: 'database-1.ctxogvlvgzbq.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

class Todo extends Sequelize.Model {}
Todo.init({
  id: { type: Sequelize.INTEGER, primaryKey: true },
  action: Sequelize.STRING
}, { sequelize, modelName: 'todo' }); // this expects a table name 'todos' - it's auto pluralized



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

app.get('/insert', (req, res) => {
    sequelize.sync()
    .then(() => Todo.create({
        id: 5,
        action: 'from seq'
    }))
    .then(todo => {
        console.log(todo.toJSON());
        res.send('ok');
    });
    
})

app.listen(port, () => console.log('running on port ' + port));
