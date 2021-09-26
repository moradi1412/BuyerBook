const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const { books } = require('./data/Books')


app.get('/api/books', (req, res) => {
    res.send(books);
  });

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });