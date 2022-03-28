const { romanize, deromanize } = require('./romanize'); 

const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World!');
})

// soit faire une route POST pour récupérer le contenu depuis le body de la requête
// soit récupérer l'info depuis l'URL (GET) : route 

app.get(`/romanize/:number`, (req, res) => {
  res.send(romanize(req.params.number));
})
app.get(`/deromanize/:roman`, (req, res) => {
  res.send(deromanize(req.params.roman));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})