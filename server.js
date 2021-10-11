const express = require('express');
const routes = require('./routes'); 
const sequelize = require('./config/connection'); 

const PORT = process.env.PORT || 3002;
const app = express();


// const fs = require('fs');
// const path = require('path');
// app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const { books } = require('./data/Books')

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// function createNewBooks(body, booksArray) { 
//   const book = body; 
//   booksArray.push(book); 
//   fs.writeFileSync(
//     path.join(__dirname, './data/Books.json'),
//     JSON.stringify({ books: booksArray}, null, 2)
//   ); 
//   return book; 
// }


// app.get('/api/books', (req, res) => {
//   let results = books;  
//   res.json(results);
// });

// app.post('/api/books', (req, res) => {
  
//   req.body.id = books.length.toString();
//   const book = createNewBooks(req.body, books);
//   res.json(book);
//   }
// );

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

// app.get('/view-all-books', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/view-all-books.html'));
// });
