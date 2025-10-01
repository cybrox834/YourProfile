const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // put your HTML/CSS/JS files in a folder named 'public'

let users = [];

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  users.push({ username, email, password });
  res.send({ message: 'User registered successfully!' });
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
