const $bookform = document.querySelector('#book-form');

const handleBookFormSubmit = event => {
  event.preventDefault();

  const title = $bookform.querySelector('[name="book-name"]').value;
  const author = $bookform.querySelector('[name="author-name"]').value;
  const year = $bookform.querySelector('[name="yearPublished"]').value;
  const category = $bookform.querySelector('[name="category"]').value;
  const reviewers = $bookform.querySelector('[name="review-name"]').value;
  const comments = $bookform.querySelector('[name="comment"]').value;


 
  const bookObject = { title, author, year, category, reviewers, comments };

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

$bookform.addEventListener('submit', handleBookFormSubmit);
