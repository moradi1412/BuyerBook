const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const fs = require('fs');
const path = require('path');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { books } = require('./data/Books')


function createNewBooks(body, booksArray) { 
  const book = body; 
  booksArray.push(book); 
  fs.writeFileSync(
    path.join(__dirname, './data/Books.json'),
    JSON.stringify({ books: booksArray}, null, 2)
  ); 
  return book; 
}


app.get('/api/books', (req, res) => {
  let results = books;  
  res.json(results);
});

app.post('/api/books', (req, res) => {
  
  req.body.id = books.length.toString();
  const book = createNewBooks(req.body, books);
  res.json(book);
  }
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });