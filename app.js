
const express = require('express');
const app = express();

const addUser = (req, res, next) => {
  req.user = 'Guest';
  next(); 
};


app.get('/welcome', addUser, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}! Ready to handle requests.`);
});
