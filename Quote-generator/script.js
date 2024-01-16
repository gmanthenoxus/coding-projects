document.addEventListener('DOMContentLoaded', fetchQuotes);

async function fetchQuotes() {
    const numberOfQuotes = 10; // Adjust the number of quotes you want
    const apiUrl = `https://api.quotable.io/quotes?page1`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const quoteTextElement = document.getElementById('quote-text');
        quoteTextElement.innerHTML = ''; // Clear previous quotes

        data.results.forEach(quote => {
            const quoteParagraph = document.createElement('p');
            quoteParagraph.textContent = quote.content;
            quoteTextElement.appendChild(quoteParagraph);
        });

    } catch (error) {
        console.error('Error fetching quotes:', error);
        const quoteTextElement = document.getElementById('quote-text');
        quoteTextElement.textContent = 'An error occurred. Please try again.';
    }
}
