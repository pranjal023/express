
const express = require('express');
const app = express();
let PORT= 3000
app.use(express.json())


app.get('/orders', (req, res) => {
  res.send('Here is the list of all orders.');
});


app.post('/orders', (req, res) => {
  res.send('A new order has been created.');
});


app.get('/users', (req, res) => {
  res.send('Here is the list of all users.');
});


app.post('/users', (req, res) => {
  res.send('A new user has been added.');
});

const addUser = (req, res, next) => {
  req.user = 'Guest';
  next(); 
};


app.get('/welcome', addUser, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}! Ready to handle requests.`);
});
