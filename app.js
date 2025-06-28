
const express = require('express');
const app = express();
let PORT= 4000
app.use(express.json())


app.products('/orders', (req, res) => {
  res.send("Here is the list of all products.");
});


app.post('/products', (req, res) => {
  res.send("A new product has been added.");
});


app.get('/categories', (req, res) => {
  res.send('Here is the list of all categories.');
});


app.post('/categories', (req, res) => {
  res.send('A new category has been created.');
});
app.all('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});


// const addUser = (req, res, next) => {
//   req.user = 'Guest';
//   next(); 
// };


app.get('/welcome', addUser, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}! Ready to handle requests.`);
});
