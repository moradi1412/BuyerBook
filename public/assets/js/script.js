const $bookform = document.querySelector('#book-form');
const bookContent = document.getElementById("bookContent"); 


const handleBookFormSubmit = event => {
  event.preventDefault();

  const imglink = $bookform.querySelector('[name="imglink"]').value;
  const title = $bookform.querySelector('[name="book-name"]').value;
  const author = $bookform.querySelector('[name="author-name"]').value;
  const country = $bookform.querySelector('[name="country"]').value;
  const language = $bookform.querySelector('[name="language"]').value;
  const pages = $bookform.querySelector('[name="pages"]').value;
  const year = $bookform.querySelector('[name="yearPublished"]').value;
  const category = $bookform.querySelector('[name="category"]').value;
  const reviewers = $bookform.querySelector('[name="review-name"]').value;
  const comments = $bookform.querySelector('[name="comment"]').value;


 
  const bookObject = { imglink, title, author, country, language, pages, year, category, reviewers, comments };

  fetch('/api/books', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookObject)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert('Error: ' + response.statusText);
    })
    .then(postResponse => {
      console.log(postResponse);
      alert('Thank you for adding an book!');
    });

};

const printBooks = bookArray => {
  console.log(bookArray); 

  const bookHTML = bookArray.map(({author, country, imageLink, language, link, pages, title, year}) => {
    return` 
    <div class="col-md-4">
    <div class="card p-3">
    <a href="#"><i class="bi bi-bookmark-heart text-success float-end" style="font-size: 2rem"></i></a>
    <img src="./assets/${imageLink}" alt="book-image" class="img-thumbnail"/>
      <h4 class="text-primary">${title}</h4>
      <p>Author: ${author}<br/>
         Country: ${country}<br/>
         Language: ${language}<br/>         
         pages: ${pages}<br/>
         year: ${year}<br/>
        <a href="${link}"> ${link}</a>"
      </p>
    </div>
  </div>`
  });
bookContent.innerHTML = bookHTML.join(''); 
}

const getBooks = (formData = {}) => {
  let queryUrl = '/api/books';

  Object.entries(formData).forEach(([key, value]) => {
    queryUrl += `${key}=${value}&`;
  });

  console.log(queryUrl);

  fetch(queryUrl)
  .then(response => {
    if (!response.ok) {
      return alert('Error: ' + response.statusText);
    }
    return response.json();
  })
  .then(bookData => {
    console.log(bookData);
    printBooks(bookData);
  });
}; 

getBooks();

$bookform.addEventListener('submit', handleBookFormSubmit);
