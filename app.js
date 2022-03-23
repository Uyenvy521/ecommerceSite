const express = require('express');// including express module in our js file
const bodyParser = require('body-parser');// including body-parser module in our js file
const app = express();//instance of an express
const port = 3001;// 
const queries = require('./queries');
const path = require('path');
const { type } = require('os');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}));

// http://localhost:3001
app.get('/',(req,res)=>{
    res.json({info: 'Example of Node.js Express and PostGres API'});
});

//http://localhost:3001/users
app.get('/users',queries.getUsers);


//http://localhost:3001/users/2
app.get('/users/:id',queries.getUserById);

//Post http://localhost:3001/users
app.post('/users',queries.createUser);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })