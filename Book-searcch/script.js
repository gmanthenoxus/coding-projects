const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const resultsContainer = document.getElementById('results-container');

searchButton.addEventListener('click', searchBooks);

function searchBooks() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
            .then(response => response.json())
            .then(data => displayResults(data.items))
            .catch(error => console.error('Error fetching books:', error));
    } else {
        alert('Please enter a search term');
    }
}

function displayResults(books) {
    resultsContainer.innerHTML = '';

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const title = book.volumeInfo.title;
        const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
        const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';

        bookCard.innerHTML = `
            <img src="${thumbnail}" alt="Book Cover">
            <div class="book-details">
                <p class="book-title">${title}</p>
                <p class="book-author">Author: ${authors}</p>
            </div>
        `;

        resultsContainer.appendChild(bookCard);
    });
}
