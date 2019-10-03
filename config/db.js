const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysqlfirsttest', 'admin', 'Leafs2905.', {
    host: 'database-1.ctxogvlvgzbq.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

class Todo extends Sequelize.Model {}
    Todo.init({
        id: { type: Sequelize.INTEGER, primaryKey: true },
        action: Sequelize.STRING
    }, { sequelize, modelName: 'todo' }); // this expects a table name 'todos' - it's auto pluralized


module.exports.Todo = Todo;
module.exports.sequelize = sequelize;